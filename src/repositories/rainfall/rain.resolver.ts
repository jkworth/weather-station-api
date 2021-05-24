import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Rain } from './rain.entity';
import { RainService } from './rain.service';

@Resolver(() => Rain)
export class RainResolver {
  constructor(private service: RainService) {}

  @Query(() => [Rain])
  async rainForLast24Hours(): Promise<Rain[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Rain)
  newRainAdded(): AsyncIterator<Rain> {
    return this.service.getSubscription();
  }
}
