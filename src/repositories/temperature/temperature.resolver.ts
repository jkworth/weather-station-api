import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Temperature } from './temperature.entity';
import { TemperatureService } from './temperature.service';

@Resolver(() => Temperature)
export class TemperatureResolver {
  constructor(private service: TemperatureService) {}

  @Query(() => [Temperature], { name: 'temperaturesForLast24Hours' })
  async getTemperaturesForLast24Hours(): Promise<Temperature[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Temperature)
  newTemperatureAdded(): AsyncIterator<Temperature> {
    return this.service.getSubscription();
  }
}
