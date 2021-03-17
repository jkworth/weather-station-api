import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { RainWhereArgs } from './rain-where.args';
import { Rain } from './rain.entity';
import { RainService } from './rain.service';

@Resolver(() => Rain)
export class RainResolver {
  constructor(private rainService: RainService) {}

  @Query(() => [Rain], { name: 'rain' })
  async getRain(
    @Args('where', { nullable: true, type: () => [RainWhereArgs] }, ShapeWherePipe)
    where?: RainWhereArgs[],
  ): Promise<Rain[]> {
    return this.rainService.findAll(where);
  }
}
