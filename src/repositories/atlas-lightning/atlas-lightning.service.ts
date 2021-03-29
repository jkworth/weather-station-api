import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { AtlasLightningWhereArgs } from './atlas-lightning-where.args';
import { AtlasLightning } from './atlas-lightning.entity';

@Injectable()
export class AtlasLightningService extends ServiceBase<AtlasLightning, AtlasLightningWhereArgs> {
  constructor(
    @InjectRepository(AtlasLightning)
    repository: Repository<AtlasLightning>,
    pubSub: ApiPubSub,
  ) {
    super(repository, AtlasLightning.name, pubSub);
  }
}
