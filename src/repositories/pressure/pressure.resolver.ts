import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { PressureWhereArgs } from './pressure-where.args';
import { Pressure } from './pressure.entity';
import { PressureService } from './pressure.service';

@Resolver(() => Pressure)
export class PressureResolver {
  constructor(private pressureService: PressureService) {}

  @Query(() => [Pressure], { name: 'pressures' })
  async getPressures(
    @Args('where', { nullable: true, type: () => [PressureWhereArgs] }, ShapeWherePipe)
    where?: PressureWhereArgs[],
  ): Promise<Pressure[]> {
    return this.pressureService.findAll(where);
  }
}
