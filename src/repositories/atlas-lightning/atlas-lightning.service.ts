import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { AtlasLightningWhereArgs } from './atlas-lightning-where.args';
import { AtlasLightning } from './atlas-lightning.entity';

@Injectable()
export class AtlasLightningService {
  private readonly logger = new Logger(AtlasLightning.name);

  constructor(
    @InjectRepository(AtlasLightning)
    private atlasLightningRepository: Repository<AtlasLightning>,
  ) {}

  async findAll(where: AtlasLightningWhereArgs[]): Promise<AtlasLightning[]> {
    const dbQueryCriteria: FindManyOptions<AtlasLightning> = {
      where,
      order: { timestamp: 'DESC' },
    };
    this.logger.log(`Entity table was searched with args: ${JSON.stringify(dbQueryCriteria)}`);
    return this.atlasLightningRepository.find(dbQueryCriteria);
  }
}
