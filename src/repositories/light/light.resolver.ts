import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Light } from './light.entity';
import { LightService } from './light.service';

@Resolver(() => Light)
export class LightResolver {
  constructor(private service: LightService) {}

  @Query(() => [Light])
  async lightForLast24Hours(): Promise<Light[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Light)
  newLightAdded(): AsyncIterator<Light> {
    return this.service.getSubscription();
  }
}
