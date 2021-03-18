import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Pressure } from './pressure.entity';
import { PressureResolver } from './pressure.resolver';
import { PressureService } from './pressure.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pressure]), CommonModule],
  providers: [Pressure, PressureService, PressureResolver],
})
export class PressureModule {}
