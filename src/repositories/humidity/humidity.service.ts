import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { HumidityWhereArgs } from './humidity-where.args';
import { Humidity } from './humidity.entity';

@Injectable()
export class HumidityService {
  private readonly logger = new Logger(Humidity.name);

  constructor(
    @InjectRepository(Humidity)
    private humidityRepository: Repository<Humidity>,
  ) {}

  async findAll(where: HumidityWhereArgs[]): Promise<Humidity[]> {
    const dbQueryCriteria: FindManyOptions<Humidity> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.humidityRepository.find(dbQueryCriteria);
  }
}
