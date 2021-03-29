import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { PressureWhereArgs } from './pressure-where.args';
import { Pressure } from './pressure.entity';

@Injectable()
export class PressureService extends ServiceBase<Pressure, PressureWhereArgs> {
  constructor(
    @InjectRepository(Pressure)
    repository: Repository<Pressure>,
    pubSub: ApiPubSub,
  ) {
    super(repository, Pressure.name, pubSub);
  }
}
