import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { AtlasStatus } from './atlas-status.entity';
import { AtlasStatusResolver } from './atlas-status.resolver';
import { AtlasStatusService } from './atlas-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([AtlasStatus]), CommonModule],
  providers: [AtlasStatus, AtlasStatusService, AtlasStatusResolver],
})
export class AtlasStatusModule {}
