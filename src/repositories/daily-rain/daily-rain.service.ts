import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { DailyRainWhereArgs } from './daily-rain-where.args';
import { DailyRain } from './daily-rain.entity';

@Injectable()
export class DailyRainService {
  private readonly logger = new Logger(DailyRain.name);

  constructor(
    @InjectRepository(DailyRain)
    private dailyRainRepository: Repository<DailyRain>,
  ) {}

  async findAll(where: DailyRainWhereArgs[]): Promise<DailyRain[]> {
    const dbQueryCriteria: FindManyOptions<DailyRain> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.dailyRainRepository.find(dbQueryCriteria);
  }
}
