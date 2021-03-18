import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Temperature } from './temperature.entity';
import { TemperatureResolver } from './temperature.resolver';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature]), CommonModule],
  providers: [Temperature, TemperatureService, TemperatureResolver],
})
export class TemperatureModule {}
