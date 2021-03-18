import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { DailyRain } from './daily-rain.entity';
import { DailyRainResolver } from './daily-rain.resolver';
import { DailyRainService } from './daily-rain.service';

@Module({
  imports: [TypeOrmModule.forFeature([DailyRain]), CommonModule],
  providers: [DailyRain, DailyRainService, DailyRainResolver],
})
export class DailyRainModule {}
