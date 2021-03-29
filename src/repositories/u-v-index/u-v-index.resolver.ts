import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { UVIndexWhereArgs } from './u-v-index-where.args';
import { UVIndex } from './u-v-index.entity';
import { UVIndexService } from './u-v-index.service';

@Resolver(() => UVIndex)
export class UVIndexResolver {
  constructor(private service: UVIndexService) {}

  @Query(() => [UVIndex], { name: 'uvIndexes' })
  async getUVIndexes(
    @Args('where', { nullable: true, type: () => [UVIndexWhereArgs] }, ShapeWherePipe)
    where?: UVIndexWhereArgs[],
  ): Promise<UVIndex[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => UVIndex)
  newUVIndexAdded(): AsyncIterator<UVIndex> {
    return this.service.getSubscription();
  }
}
