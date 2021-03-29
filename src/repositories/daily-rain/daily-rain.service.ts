import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { DailyRainWhereArgs } from './daily-rain-where.args';
import { DailyRain } from './daily-rain.entity';

@Injectable()
export class DailyRainService extends ServiceBase<DailyRain, DailyRainWhereArgs> {
  constructor(
    @InjectRepository(DailyRain)
    repository: Repository<DailyRain>,
    pubSub: ApiPubSub,
  ) {
    super(repository, DailyRain.name, pubSub);
  }
}
