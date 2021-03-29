import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from '../common/pipes/shape-where.pipe';
import { AtlasLightningWhereArgs } from './atlas-lightning-where.args';
import { AtlasLightning } from './atlas-lightning.entity';
import { AtlasLightningService } from './atlas-lightning.service';

@Resolver(() => AtlasLightning)
export class AtlasLightningResolver {
  constructor(private service: AtlasLightningService) {}

  @Query(() => [AtlasLightning], { name: 'atlasLightnings' })
  async getAtlasLightnings(
    @Args('where', { nullable: true, type: () => [AtlasLightningWhereArgs] }, ShapeWherePipe)
    where?: AtlasLightningWhereArgs[],
  ): Promise<AtlasLightning[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => AtlasLightning)
  newAtlasLightningAdded(): AsyncIterator<AtlasLightning> {
    return this.service.getSubscription();
  }
}
