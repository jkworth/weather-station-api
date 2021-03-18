import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Archive } from './archive.entity';
import { ArchiveResolver } from './archive.resolver';
import { ArchiveService } from './archive.service';

@Module({
  imports: [TypeOrmModule.forFeature([Archive]), CommonModule],
  providers: [Archive, ArchiveService, ArchiveResolver],
})
export class ArchiveModule {}
