import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { AccessStatusWhereArgs } from './access-status-where.args';
import { AccessStatus } from './access-status.entity';

@Injectable()
export class AccessStatusService {
  private readonly logger = new Logger(AccessStatus.name);

  constructor(
    @InjectRepository(AccessStatus)
    private accessStatusRepository: Repository<AccessStatus>,
  ) {}

  async findAll(where: AccessStatusWhereArgs[]): Promise<AccessStatus[]> {
    const dbQueryCriteria: FindManyOptions<AccessStatus> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.accessStatusRepository.find(dbQueryCriteria);
  }
}
