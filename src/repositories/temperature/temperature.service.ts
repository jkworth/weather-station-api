import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { TemperatureWhereArgs } from './temperature-where.args';
import { Temperature } from './temperature.entity';

@Injectable()
export class TemperatureService extends ServiceBase<Temperature, TemperatureWhereArgs> {
  constructor(
    @InjectRepository(Temperature)
    repository: Repository<Temperature>,
  ) {
    super(repository, Temperature.name);
  }
}
