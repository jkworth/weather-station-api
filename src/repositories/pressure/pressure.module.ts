import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { Pressure } from './pressure.entity';
import { PressureResolver } from './pressure.resolver';
import { PressureService } from './pressure.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pressure]), PipesModule, CommonModule],
  providers: [Pressure, PressureService, PressureResolver],
})
export class PressureModule {}
