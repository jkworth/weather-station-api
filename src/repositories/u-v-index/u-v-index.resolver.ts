import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { UvIndex } from './u-v-index.entity';
import { UVIndexService } from './u-v-index.service';

@Resolver(() => UvIndex)
export class UVIndexResolver {
  constructor(private service: UVIndexService) {}

  @Query(() => [UvIndex])
  async uvIndexForLast24Hours(): Promise<UvIndex[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => UvIndex)
  newUvIndexAdded(): AsyncIterator<UvIndex> {
    return this.service.getSubscription();
  }
}
