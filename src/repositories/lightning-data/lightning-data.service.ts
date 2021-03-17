import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { LightningDatumWhereArgs } from './lightning-data-where.args';
import { LightningDatum } from './lightning-data.entity';

@Injectable()
export class LightningDataService {
  private readonly logger = new Logger(LightningDatum.name);

  constructor(
    @InjectRepository(LightningDatum)
    private lightningDataRepository: Repository<LightningDatum>,
  ) {}

  async findAll(where: LightningDatumWhereArgs[]): Promise<LightningDatum[]> {
    const dbQueryCriteria: FindManyOptions<LightningDatum> = {
      where,
      order: { lastStrikeTimeStamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.lightningDataRepository.find(dbQueryCriteria);
  }
}
