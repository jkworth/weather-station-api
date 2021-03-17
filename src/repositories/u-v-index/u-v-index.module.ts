import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { UVIndex } from './u-v-index.entity';
import { UVIndexResolver } from './u-v-index.resolver';
import { UVIndexService } from './u-v-index.service';

@Module({
  imports: [TypeOrmModule.forFeature([UVIndex]), PipesModule, CommonModule],
  providers: [UVIndex, UVIndexService, UVIndexResolver],
})
export class UVIndexModule {}
