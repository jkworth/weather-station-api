import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from '../common/pipes/shape-where.pipe';
import { LightWhereArgs } from './light-where.args';
import { Light } from './light.entity';
import { LightService } from './light.service';

@Resolver(() => Light)
export class LightResolver {
  constructor(private service: LightService) {}

  @Query(() => [Light], { name: 'lights' })
  async getHumidities(
    @Args('where', { nullable: true, type: () => [LightWhereArgs] }, ShapeWherePipe)
    where?: LightWhereArgs[],
  ): Promise<Light[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => Light)
  newLightAdded(): AsyncIterator<Light> {
    return this.service.getSubscription();
  }
}
