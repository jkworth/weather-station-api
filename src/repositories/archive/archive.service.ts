import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { ArchiveWhereArgs } from './archive-where.args';
import { Archive } from './archive.entity';

@Injectable()
export class ArchiveService {
  private readonly logger = new Logger(Archive.name);

  constructor(
    @InjectRepository(Archive)
    private archiveRepository: Repository<Archive>,
  ) {}

  async findAll(where: ArchiveWhereArgs[]): Promise<Archive[]> {
    const dbQueryCriteria: FindManyOptions<Archive> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.archiveRepository.find(dbQueryCriteria);
  }
}
