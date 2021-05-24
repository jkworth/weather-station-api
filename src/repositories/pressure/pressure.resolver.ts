import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Pressure } from './pressure.entity';
import { PressureService } from './pressure.service';

@Resolver(() => Pressure)
export class PressureResolver {
  constructor(private service: PressureService) {}

  @Query(() => [Pressure])
  async pressureForLast24Hours(): Promise<Pressure[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Pressure)
  newPressureAdded(): AsyncIterator<Pressure> {
    return this.service.getSubscription();
  }
}
