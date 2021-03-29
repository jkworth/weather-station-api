import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { AtlasStatusWhereArgs } from './atlas-status-where.args';
import { AtlasStatus } from './atlas-status.entity';

@Injectable()
export class AtlasStatusService extends ServiceBase<AtlasStatus, AtlasStatusWhereArgs> {
  constructor(
    @InjectRepository(AtlasStatus)
    repository: Repository<AtlasStatus>,
    pubSub: ApiPubSub,
  ) {
    super(repository, AtlasStatus.name, pubSub);
  }
}
