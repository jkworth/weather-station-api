import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceBase } from '../repository-base/service-base.abstract';
import { ArchiveWhereArgs } from './archive-where.args';
import { Archive } from './archive.entity';

@Injectable()
export class ArchiveService extends ServiceBase<Archive, ArchiveWhereArgs> {
  constructor(
    @InjectRepository(Archive)
    repository: Repository<Archive>,
  ) {
    super(repository, Archive.name);
  }
}
