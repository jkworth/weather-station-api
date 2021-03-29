import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { LightWhereArgs } from './light-where.args';
import { Light } from './light.entity';

@Injectable()
export class LightService extends ServiceBase<Light, LightWhereArgs> {
  constructor(
    @InjectRepository(Light)
    repository: Repository<Light>,
    pubSub: ApiPubSub,
  ) {
    super(repository, Light.name, pubSub);
  }
}
