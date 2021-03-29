import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { AtlasStatusWhereArgs } from './atlas-status-where.args';
import { AtlasStatus } from './atlas-status.entity';
import { AtlasStatusService } from './atlas-status.service';

@Resolver(() => AtlasStatus)
export class AtlasStatusResolver {
  constructor(private service: AtlasStatusService) {}

  @Query(() => [AtlasStatus], { name: 'atlasStatuses' })
  async getAtlasStatuses(
    @Args('where', { nullable: true, type: () => [AtlasStatusWhereArgs] }, ShapeWherePipe)
    where?: AtlasStatusWhereArgs[],
  ): Promise<AtlasStatus[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => AtlasStatus)
  newAtlasStatusAdded(): AsyncIterator<AtlasStatus> {
    return this.service.getSubscription();
  }
}
