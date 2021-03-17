import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { AtlasStatusWhereArgs } from './atlas-status-where.args';
import { AtlasStatus } from './atlas-status.entity';

@Injectable()
export class AtlasStatusService {
  private readonly logger = new Logger(AtlasStatus.name);

  constructor(
    @InjectRepository(AtlasStatus)
    private atlasStatusRepository: Repository<AtlasStatus>,
  ) {}

  async findAll(where: AtlasStatusWhereArgs[]): Promise<AtlasStatus[]> {
    const dbQueryCriteria: FindManyOptions<AtlasStatus> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.atlasStatusRepository.find(dbQueryCriteria);
  }
}
