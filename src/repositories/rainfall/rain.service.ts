import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { RainWhereArgs } from './rain-where.args';
import { Rain } from './rain.entity';

@Injectable()
export class RainService {
  private readonly logger = new Logger(Rain.name);

  constructor(
    @InjectRepository(Rain)
    private rainRepository: Repository<Rain>,
  ) {}

  async findAll(where: RainWhereArgs[]): Promise<Rain[]> {
    const dbQueryCriteria: FindManyOptions<Rain> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.rainRepository.find(dbQueryCriteria);
  }
}
