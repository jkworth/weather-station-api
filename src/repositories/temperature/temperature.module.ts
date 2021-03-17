import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { Temperature } from './temperature.entity';
import { TemperatureResolver } from './temperature.resolver';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature]), PipesModule, CommonModule],
  providers: [Temperature, TemperatureService, TemperatureResolver],
})
export class TemperatureModule {}
