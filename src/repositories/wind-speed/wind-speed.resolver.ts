import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { WindSpeedWhereArgs } from './wind-speed-where.args';
import { WindSpeed } from './wind-speed.entity';
import { WindSpeedService } from './wind-speed.service';

@Resolver(() => WindSpeed)
export class WindSpeedResolver {
  constructor(private service: WindSpeedService) {}

  @Query(() => [WindSpeed], { name: 'windSpeeds' })
  async getWindSpeeds(
    @Args('where', { nullable: true, type: () => [WindSpeedWhereArgs] }, ShapeWherePipe)
    where?: WindSpeedWhereArgs[],
  ): Promise<WindSpeed[]> {
    return await this.service.findAll(where);
  }

  @Subscription(() => WindSpeed)
  newWindSpeedAdded(): AsyncIterator<WindSpeed> {
    return this.service.getSubscription();
  }
}
