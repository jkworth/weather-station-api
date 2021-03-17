import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { AccessStatus } from './access-status.entity';
import { AccessStatusResolver } from './access-status.resolver';
import { AccessStatusService } from './access-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccessStatus]), PipesModule, CommonModule],
  providers: [AccessStatus, AccessStatusService, AccessStatusResolver],
})
export class AccessStatusModule {}
