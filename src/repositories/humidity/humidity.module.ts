import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Humidity } from './humidity.entity';
import { HumidityResolver } from './humidity.resolver';
import { HumidityService } from './humidity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Humidity]), CommonModule],
  providers: [Humidity, HumidityService, HumidityResolver],
})
export class HumidityModule {}
