import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { AccessStatusWhereArgs } from './access-status-where.args';
import { AccessStatus } from './access-status.entity';

@Injectable()
export class AccessStatusService extends ServiceBase<AccessStatus, AccessStatusWhereArgs> {
  constructor(
    @InjectRepository(AccessStatus)
    repository: Repository<AccessStatus>,
  ) {
    super(repository, AccessStatus.name);
  }
}
