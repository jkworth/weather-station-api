import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { AccessStatusWhereArgs } from './access-status-where.args';
import { AccessStatus } from './access-status.entity';
import { AccessStatusService } from './access-status.service';

@Resolver(() => AccessStatus)
export class AccessStatusResolver {
  constructor(private accessStatusService: AccessStatusService) {}

  @Query(() => [AccessStatus], { name: 'accessStatuses' })
  async getAccessStatuses(
    @Args('where', { nullable: true, type: () => [AccessStatusWhereArgs] }, ShapeWherePipe)
    where?: AccessStatusWhereArgs[],
  ): Promise<AccessStatus[]> {
    return this.accessStatusService.findAll(where);
  }
}
