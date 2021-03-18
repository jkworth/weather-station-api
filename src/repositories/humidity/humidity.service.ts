import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { HumidityWhereArgs } from './humidity-where.args';
import { Humidity } from './humidity.entity';

@Injectable()
export class HumidityService extends ServiceBase<Humidity, HumidityWhereArgs> {
  constructor(
    @InjectRepository(Humidity)
    repository: Repository<Humidity>,
  ) {
    super(repository, Humidity.name);
  }
}
