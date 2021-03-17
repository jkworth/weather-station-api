import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { IrisStatusWhereArgs } from './iris-status-where.args';
import { IrisStatus } from './iris-status.entity';

@Injectable()
export class IrisStatusService {
  private readonly logger = new Logger(IrisStatus.name);

  constructor(
    @InjectRepository(IrisStatus)
    private irisStatusRepository: Repository<IrisStatus>,
  ) {}

  async findAll(where: IrisStatusWhereArgs[]): Promise<IrisStatus[]> {
    const dbQueryCriteria: FindManyOptions<IrisStatus> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.irisStatusRepository.find(dbQueryCriteria);
  }
}
