import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { WindSpeedWhereArgs } from './wind-speed-where.args';
import { WindSpeed } from './wind-speed.entity';
import { WindSpeedService } from './wind-speed.service';

@Resolver(() => WindSpeed)
export class WindSpeedResolver {
  constructor(private windSpeedService: WindSpeedService) {}

  @Query(() => [WindSpeed], { name: 'windSpeeds' })
  async getWindSpeeds(
    @Args('where', { nullable: true, type: () => [WindSpeedWhereArgs] }, ShapeWherePipe)
    where?: WindSpeedWhereArgs[],
  ): Promise<WindSpeed[]> {
    return await this.windSpeedService.findAll(where);
  }
}
