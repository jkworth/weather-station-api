import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { TemperatureWhereArgs } from './temperature-where.args';
import { Temperature } from './temperature.entity';
import { TemperatureService } from './temperature.service';

@Resolver(() => Temperature)
export class TemperatureResolver {
  constructor(private temperatureService: TemperatureService) {}

  @Query(() => [Temperature], { name: 'temperatures' })
  async getTemperatures(
    @Args('where', { nullable: true, type: () => [TemperatureWhereArgs] }, ShapeWherePipe)
    where?: TemperatureWhereArgs[],
  ): Promise<Temperature[]> {
    return this.temperatureService.findAll(where);
  }
}
