import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { DailyRainWhereArgs } from './daily-rain-where.args';
import { DailyRain } from './daily-rain.entity';
import { DailyRainService } from './daily-rain.service';

@Resolver(() => DailyRain)
export class DailyRainResolver {
  constructor(private dailyRainService: DailyRainService) {}

  @Query(() => [DailyRain], { name: 'dailyRains' })
  async getDailyRains(
    @Args('where', { nullable: true, type: () => [DailyRainWhereArgs] }, ShapeWherePipe)
    where?: DailyRainWhereArgs[],
  ): Promise<DailyRain[]> {
    return this.dailyRainService.findAll(where);
  }
}
