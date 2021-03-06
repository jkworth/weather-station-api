import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { AccessStatusWhereArgs } from './access-status-where.args';
import { AccessStatus } from './access-status.entity';

@Injectable()
export class AccessStatusService extends ServiceBase<AccessStatus, AccessStatusWhereArgs> {
  constructor(
    @InjectRepository(AccessStatus)
    repository: Repository<AccessStatus>,
    pubSub: ApiPubSub,
  ) {
    super(repository, AccessStatus.name, pubSub);
  }
}
