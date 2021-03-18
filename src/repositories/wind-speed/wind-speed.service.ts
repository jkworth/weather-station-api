import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { WindSpeedWhereArgs } from './wind-speed-where.args';
import { WindSpeed } from './wind-speed.entity';

@Injectable()
export class WindSpeedService extends ServiceBase<WindSpeed, WindSpeedWhereArgs> {
  constructor(
    @InjectRepository(WindSpeed)
    repository: Repository<WindSpeed>,
  ) {
    super(repository, WindSpeed.name);
  }
}
