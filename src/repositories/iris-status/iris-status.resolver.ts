import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { IrisStatusWhereArgs } from './iris-status-where.args';
import { IrisStatus } from './iris-status.entity';
import { IrisStatusService } from './iris-status.service';

@Resolver(() => IrisStatus)
export class IrisStatusResolver {
  constructor(private service: IrisStatusService) {}

  @Query(() => [IrisStatus], { name: 'irisStatuses' })
  async getIrisStatuses(
    @Args('where', { nullable: true, type: () => [IrisStatusWhereArgs] }, ShapeWherePipe)
    where?: IrisStatusWhereArgs[],
  ): Promise<IrisStatus[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => IrisStatus)
  newIrisStatusAdded(): AsyncIterator<IrisStatus> {
    return this.service.getSubscription();
  }
}
