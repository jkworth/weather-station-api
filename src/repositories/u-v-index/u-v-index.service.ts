import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { UVIndexWhereArgs } from './u-v-index-where.args';
import { UvIndex } from './u-v-index.entity';

@Injectable()
export class UVIndexService extends ServiceBase<UvIndex, UVIndexWhereArgs> {
  constructor(
    @InjectRepository(UvIndex)
    repository: Repository<UvIndex>,
    pubSub: ApiPubSub,
  ) {
    super(repository, UvIndex.name, pubSub);
  }
}
