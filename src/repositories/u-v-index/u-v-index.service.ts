import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { UVIndexWhereArgs } from './u-v-index-where.args';
import { UVIndex } from './u-v-index.entity';

@Injectable()
export class UVIndexService extends ServiceBase<UVIndex, UVIndexWhereArgs> {
  constructor(
    @InjectRepository(UVIndex)
    repository: Repository<UVIndex>,
  ) {
    super(repository, UVIndex.name);
  }
}
