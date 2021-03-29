import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { TemperatureWhereArgs } from './temperature-where.args';
import { Temperature } from './temperature.entity';
import { TemperatureService } from './temperature.service';

@Resolver(() => Temperature)
export class TemperatureResolver {
  constructor(private service: TemperatureService) {}

  @Query(() => [Temperature], { name: 'temperatures' })
  async getTemperatures(
    @Args('where', { nullable: true, type: () => [TemperatureWhereArgs] }, ShapeWherePipe)
    where?: TemperatureWhereArgs[],
  ): Promise<Temperature[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => Temperature)
  newTemperatureAdded(): AsyncIterator<Temperature> {
    return this.service.getSubscription();
  }
}
