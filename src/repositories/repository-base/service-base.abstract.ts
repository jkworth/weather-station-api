import { Logger } from '@nestjs/common';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';

export abstract class ServiceBase<T, TWA> {
  private logger: Logger;

  constructor(private repository: Repository<T>, typeName: string) {
    this.logger = new Logger(typeName);
  }

  async findAll(where: TWA[], orderByColumn = 'timestamp'): Promise<T[]> {
    const order = {};
    order[orderByColumn] = 'DESC';
    const dbQueryCriteria: FindManyOptions<T> = {
      where,
      order,
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.repository.find(dbQueryCriteria);
  }

  async findSince(date: Date, filterByColumn = 'timestamp', orderByColumn = 'timestamp'): Promise<T[]> {
    const order = {};
    order[orderByColumn] = 'ASC';
    const where = {};
    where[filterByColumn] = MoreThan(date);

    return this.repository.find({
      where,
      order,
    });
  }
}
