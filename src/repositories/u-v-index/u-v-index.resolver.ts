import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { UVIndexWhereArgs } from './u-v-index-where.args';
import { UVIndex } from './u-v-index.entity';
import { UVIndexService } from './u-v-index.service';

@Resolver(() => UVIndex)
export class UVIndexResolver {
  constructor(private uvIndexService: UVIndexService) {}

  @Query(() => [UVIndex], { name: 'uvIndexes' })
  async getUVIndexes(
    @Args('where', { nullable: true, type: () => [UVIndexWhereArgs] }, ShapeWherePipe)
    where?: UVIndexWhereArgs[],
  ): Promise<UVIndex[]> {
    return this.uvIndexService.findAll(where);
  }
}
