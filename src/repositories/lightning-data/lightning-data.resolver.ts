import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { LightningDatumWhereArgs } from './lightning-data-where.args';
import { LightningDatum } from './lightning-data.entity';
import { LightningDataService } from './lightning-data.service';

@Resolver(() => LightningDatum)
export class LightningDataResolver {
  constructor(private lightningDataService: LightningDataService) {}

  @Query(() => [LightningDatum], { name: 'lightningData' })
  async getLightningData(
    @Args('where', { nullable: true, type: () => [LightningDatumWhereArgs] }, ShapeWherePipe)
    where?: LightningDatumWhereArgs[],
  ): Promise<LightningDatum[]> {
    return this.lightningDataService.findAll(where);
  }
}
