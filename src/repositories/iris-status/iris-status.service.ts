import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { IrisStatusWhereArgs } from './iris-status-where.args';
import { IrisStatus } from './iris-status.entity';

@Injectable()
export class IrisStatusService extends ServiceBase<IrisStatus, IrisStatusWhereArgs> {
  constructor(
    @InjectRepository(IrisStatus)
    repository: Repository<IrisStatus>,
  ) {
    super(repository, IrisStatus.name);
  }
}
