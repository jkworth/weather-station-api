import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { WindDirectionWhereArgs } from './wind-direction-where.args';
import { WindDirection } from './wind-direction.entity';

@Injectable()
export class WindDirectionService {
  private readonly logger = new Logger(WindDirection.name);

  constructor(
    @InjectRepository(WindDirection)
    private windDirectionRepository: Repository<WindDirection>,
  ) {}

  async findAll(where: WindDirectionWhereArgs[]): Promise<WindDirection[]> {
    const dbQueryCriteria: FindManyOptions<WindDirection> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.windDirectionRepository.find(dbQueryCriteria);
  }
}
