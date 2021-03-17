import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { PressureWhereArgs } from './pressure-where.args';
import { Pressure } from './pressure.entity';

@Injectable()
export class PressureService {
  private readonly logger = new Logger(Pressure.name);

  constructor(
    @InjectRepository(Pressure)
    private pressureRepository: Repository<Pressure>,
  ) {}

  async findAll(where: PressureWhereArgs[]): Promise<Pressure[]> {
    const dbQueryCriteria: FindManyOptions<Pressure> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.pressureRepository.find(dbQueryCriteria);
  }
}
