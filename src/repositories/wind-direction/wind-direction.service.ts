import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiPubSub } from '../common/pub-sub';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { WindDirectionWhereArgs } from './wind-direction-where.args';
import { WindDirection } from './wind-direction.entity';

@Injectable()
export class WindDirectionService extends ServiceBase<WindDirection, WindDirectionWhereArgs> {
  constructor(
    @InjectRepository(WindDirection)
    repository: Repository<WindDirection>,
    pubSub: ApiPubSub,
  ) {
    super(repository, WindDirection.name, pubSub);
  }
}
