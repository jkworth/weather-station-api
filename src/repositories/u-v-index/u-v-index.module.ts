import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { UvIndex } from './u-v-index.entity';
import { UVIndexResolver } from './u-v-index.resolver';
import { UVIndexService } from './u-v-index.service';

@Module({
  imports: [TypeOrmModule.forFeature([UvIndex]), CommonModule],
  providers: [UvIndex, UVIndexService, UVIndexResolver],
})
export class UVIndexModule {}
