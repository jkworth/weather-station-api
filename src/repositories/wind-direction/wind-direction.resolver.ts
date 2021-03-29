import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { WindDirectionWhereArgs } from './wind-direction-where.args';
import { WindDirection } from './wind-direction.entity';
import { WindDirectionService } from './wind-direction.service';

@Resolver(() => WindDirection)
export class WindDirectionResolver {
  constructor(private service: WindDirectionService) {}

  @Query(() => [WindDirection], { name: 'windDirections' })
  async getWindDirections(
    @Args('where', { nullable: true, type: () => [WindDirectionWhereArgs] }, ShapeWherePipe)
    where?: WindDirectionWhereArgs[],
  ): Promise<WindDirection[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => WindDirection)
  newWindDirectionAdded(): AsyncIterator<WindDirection> {
    return this.service.getSubscription();
  }
}
