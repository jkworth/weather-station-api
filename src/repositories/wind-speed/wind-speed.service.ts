import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { WindSpeedWhereArgs } from './wind-speed-where.args';
import { WindSpeed } from './wind-speed.entity';

@Injectable()
export class WindSpeedService extends ServiceBase<WindSpeed, WindSpeedWhereArgs> {
  constructor(
    @InjectRepository(WindSpeed)
    repository: Repository<WindSpeed>,
    pubSub: ApiPubSub,
  ) {
    super(repository, WindSpeed.name, pubSub);
  }
}
