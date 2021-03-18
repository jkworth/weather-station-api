import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { IrisStatus } from './iris-status.entity';
import { IrisStatusResolver } from './iris-status.resolver';
import { IrisStatusService } from './iris-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([IrisStatus]), CommonModule],
  providers: [IrisStatus, IrisStatusService, IrisStatusResolver],
})
export class IrisStatusModule {}
