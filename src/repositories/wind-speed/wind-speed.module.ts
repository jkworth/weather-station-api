import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { WindSpeed } from './wind-speed.entity';
import { WindSpeedResolver } from './wind-speed.resolver';
import { WindSpeedService } from './wind-speed.service';

@Module({
  imports: [TypeOrmModule.forFeature([WindSpeed]), PipesModule, CommonModule],
  providers: [WindSpeed, WindSpeedService, WindSpeedResolver],
})
export class WindSpeedModule {}
