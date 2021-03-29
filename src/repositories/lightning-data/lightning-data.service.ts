import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { LightningDatumWhereArgs } from './lightning-data-where.args';
import { LightningDatum } from './lightning-data.entity';

@Injectable()
export class LightningDataService extends ServiceBase<LightningDatum, LightningDatumWhereArgs> {
  constructor(
    @InjectRepository(LightningDatum)
    repository: Repository<LightningDatum>,
    pubSub: ApiPubSub,
  ) {
    super(repository, LightningDatum.name, pubSub, 'lastStrikeTimeStamp', 'lastStrikeTimeStamp');
  }
}
