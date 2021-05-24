import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { WindSpeed } from './wind-speed.entity';
import { WindSpeedService } from './wind-speed.service';

@Resolver(() => WindSpeed)
export class WindSpeedResolver {
  constructor(private service: WindSpeedService) {}

  @Query(() => [WindSpeed])
  async windSpeedForLast24Hours(): Promise<WindSpeed[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => WindSpeed)
  newWindSpeedAdded(): AsyncIterator<WindSpeed> {
    return this.service.getSubscription();
  }
}
