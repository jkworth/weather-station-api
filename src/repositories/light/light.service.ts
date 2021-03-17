import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { LightWhereArgs } from './light-where.args';
import { Light } from './light.entity';

@Injectable()
export class LightService {
  private readonly logger = new Logger(Light.name);

  constructor(
    @InjectRepository(Light)
    private lightRepository: Repository<Light>,
  ) {}

  async findAll(where: LightWhereArgs[]): Promise<Light[]> {
    const dbQueryCriteria: FindManyOptions<Light> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.lightRepository.find(dbQueryCriteria);
  }
}
