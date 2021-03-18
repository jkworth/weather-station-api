import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { RainWhereArgs } from './rain-where.args';
import { Rain } from './rain.entity';

@Injectable()
export class RainService extends ServiceBase<Rain, RainWhereArgs> {
  constructor(
    @InjectRepository(Rain)
    repository: Repository<Rain>,
  ) {
    super(repository, Rain.name);
  }
}
