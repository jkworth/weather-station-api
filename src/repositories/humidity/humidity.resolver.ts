import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Humidity } from './humidity.entity';
import { HumidityService } from './humidity.service';

@Resolver(() => Humidity)
export class HumidityResolver {
  constructor(private service: HumidityService) {}

  @Query(() => [Humidity])
  async humidityForLast24Hours(): Promise<Humidity[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Humidity)
  newHumidityAdded(): AsyncIterator<Humidity> {
    return this.service.getSubscription();
  }
}
