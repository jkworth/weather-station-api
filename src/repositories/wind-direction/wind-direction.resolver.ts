import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { WindDirection } from './wind-direction.entity';
import { WindDirectionService } from './wind-direction.service';

@Resolver(() => WindDirection)
export class WindDirectionResolver {
  constructor(private service: WindDirectionService) {}

  @Query(() => [WindDirection])
  async windDirectionForLast24Hours(): Promise<WindDirection[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => WindDirection)
  newWindDirectionAdded(): AsyncIterator<WindDirection> {
    return this.service.getSubscription();
  }
}
