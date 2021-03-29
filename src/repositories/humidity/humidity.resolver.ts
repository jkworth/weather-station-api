import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from '../common/pipes/shape-where.pipe';
import { HumidityWhereArgs } from './humidity-where.args';
import { Humidity } from './humidity.entity';
import { HumidityService } from './humidity.service';

@Resolver(() => Humidity)
export class HumidityResolver {
  constructor(private service: HumidityService) {}

  @Query(() => [Humidity], { name: 'humidities' })
  async getHumidities(
    @Args('where', { nullable: true, type: () => [HumidityWhereArgs] }, ShapeWherePipe)
    where?: HumidityWhereArgs[],
  ): Promise<Humidity[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => Humidity)
  newHumidityAdded(): AsyncIterator<Humidity> {
    return this.service.getSubscription();
  }
}
