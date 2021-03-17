import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from '../common/pipes/shape-where.pipe';
import { LightWhereArgs } from './light-where.args';
import { Light } from './light.entity';
import { LightService } from './light.service';

@Resolver(() => Light)
export class LightResolver {
  constructor(private lightService: LightService) {}

  @Query(() => [Light], { name: 'lights' })
  async getHumidities(
    @Args('where', { nullable: true, type: () => [LightWhereArgs] }, ShapeWherePipe)
    where?: LightWhereArgs[],
  ): Promise<Light[]> {
    return this.lightService.findAll(where);
  }
}
