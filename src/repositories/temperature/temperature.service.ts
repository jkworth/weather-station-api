import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { TemperatureWhereArgs } from './temperature-where.args';
import { Temperature } from './temperature.entity';

@Injectable()
export class TemperatureService {
  private readonly logger = new Logger(Temperature.name);

  constructor(
    @InjectRepository(Temperature)
    private temperatureRepository: Repository<Temperature>,
  ) {}

  async findAll(where: TemperatureWhereArgs[]): Promise<Temperature[]> {
    const dbQueryCriteria: FindManyOptions<Temperature> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.temperatureRepository.find(dbQueryCriteria);
  }
}
