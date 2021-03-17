import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { AtlasStatusWhereArgs } from './atlas-status-where.args';
import { AtlasStatus } from './atlas-status.entity';
import { AtlasStatusService } from './atlas-status.service';

@Resolver(() => AtlasStatus)
export class AtlasStatusResolver {
  constructor(private atlasStatusService: AtlasStatusService) {}

  @Query(() => [AtlasStatus], { name: 'atlasStatuses' })
  async getAtlasStatuses(
    @Args('where', { nullable: true, type: () => [AtlasStatusWhereArgs] }, ShapeWherePipe)
    where?: AtlasStatusWhereArgs[],
  ): Promise<AtlasStatus[]> {
    return this.atlasStatusService.findAll(where);
  }
}
