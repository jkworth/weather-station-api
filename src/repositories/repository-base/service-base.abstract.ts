import { Logger } from '@nestjs/common';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';

export abstract class ServiceBase<T, TWA> {
  private logger: Logger;
  private lastDateForData = new Date();

  constructor(
    private repository: Repository<T>,
    private typeName: string,
    private pubSub: ApiPubSub,
    private defaultFilterByColumn = 'timestamp',
    private defaultOrderByColumn = 'timestamp',
  ) {
    this.logger = new Logger(typeName);
    this.pollForNewData();
  }

  get subscriptionEventName(): string {
    return `new${this.typeName}Added`;
  }

  async findAll(where: TWA[]): Promise<T[]> {
    const order = {};
    order[this.defaultOrderByColumn] = 'ASC';

    const dbQueryCriteria: FindManyOptions<T> = { where, order };

    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.repository.find(dbQueryCriteria);
  }

  async findAllForLast24Hours(): Promise<T[]> {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    return this.findAll([{ timestamp: MoreThan(date) } as any]);
  }

  getSubscription(): AsyncIterator<T> {
    return this.pubSub.asyncIterator(this.subscriptionEventName);
  }

  async findSince(date: Date): Promise<T[]> {
    const order = {};
    order[this.defaultOrderByColumn] = 'ASC';

    const where = {};
    where[this.defaultFilterByColumn] = MoreThan(date);

    const dbQueryCriteria: FindManyOptions<T> = { where, order };

    // this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.repository.find(dbQueryCriteria);
  }

  private async pollForNewData(): Promise<void> {
    const newItems = await this.findSince(this.lastDateForData);

    if (newItems.length > 0) {
      this.logger.log(`${newItems.length} new ${newItems.length === 1 ? 'entity' : 'entities'} found and published`);
      newItems.forEach((newItem) => {
        const pubObj = {};
        pubObj[this.subscriptionEventName] = newItem;
        this.pubSub.publish(this.subscriptionEventName, pubObj);
      });

      newItems.reverse();

      this.lastDateForData = newItems[0][this.defaultFilterByColumn];
    }

    setTimeout(() => {
      this.pollForNewData();
    }, 1000);
  }
}
