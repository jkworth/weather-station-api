import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import * as moment from 'moment';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { ApiPubSub } from '../common/pub-sub';
import { AccessStatusWhereArgs } from './access-status-where.args';
import { AccessStatus } from './access-status.entity';
import { AccessStatusService } from './access-status.service';

@Resolver(() => AccessStatus)
export class AccessStatusResolver {
  private lastDateForData = moment().utc().toDate();

  constructor(private accessStatusService: AccessStatusService, private pubSub: ApiPubSub) {
    this.pollForNewData();
  }

  @Query(() => [AccessStatus], { name: 'accessStatuses' })
  async getAccessStatuses(
    @Args('where', { nullable: true, type: () => [AccessStatusWhereArgs] }, ShapeWherePipe)
    where?: AccessStatusWhereArgs[],
  ): Promise<AccessStatus[]> {
    return this.accessStatusService.findAll(where);
  }

  @Subscription(() => AccessStatus)
  async statusAdded() {
    return this.pubSub.asyncIterator('accessStatusAdded');
  }

  private async pollForNewData(): Promise<void> {
    const statuses = await this.accessStatusService.findSince(this.lastDateForData);

    if (statuses.length > 0) {
      statuses.forEach((status) => {
        this.pubSub.publish('accessStatusAdded', { statusAdded: status });
      });

      statuses.reverse();

      this.lastDateForData = statuses[0].timestamp;
    }

    setTimeout(() => {
      this.pollForNewData();
    }, 1000);
  }
}
