import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UVIndexWhereArgs } from './u-v-index-where.args';
import { UVIndex } from './u-v-index.entity';

@Injectable()
export class UVIndexService {
  private readonly logger = new Logger(UVIndex.name);

  constructor(
    @InjectRepository(UVIndex)
    private uvIndexRepository: Repository<UVIndex>,
  ) {}

  async findAll(where: UVIndexWhereArgs[]): Promise<UVIndex[]> {
    const dbQueryCriteria: FindManyOptions<UVIndex> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.uvIndexRepository.find(dbQueryCriteria);
  }
}
