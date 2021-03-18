import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { AtlasStatusWhereArgs } from './atlas-status-where.args';
import { AtlasStatus } from './atlas-status.entity';

@Injectable()
export class AtlasStatusService extends ServiceBase<AtlasStatus, AtlasStatusWhereArgs> {
  constructor(
    @InjectRepository(AtlasStatus)
    repository: Repository<AtlasStatus>,
  ) {
    super(repository, AtlasStatus.name);
  }
}
