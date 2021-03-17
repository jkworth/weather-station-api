import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { WindSpeedWhereArgs } from './wind-speed-where.args';
import { WindSpeed } from './wind-speed.entity';

@Injectable()
export class WindSpeedService {
  private readonly logger = new Logger(WindSpeed.name);

  constructor(
    @InjectRepository(WindSpeed)
    private windSpeedRepository: Repository<WindSpeed>,
  ) {}

  async findAll(where: WindSpeedWhereArgs[]): Promise<WindSpeed[]> {
    const dbQueryCriteria: FindManyOptions<WindSpeed> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.windSpeedRepository.find(dbQueryCriteria);
  }
}
