import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Rain } from './rain.entity';
import { RainResolver } from './rain.resolver';
import { RainService } from './rain.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rain]), CommonModule],
  providers: [Rain, RainService, RainResolver],
})
export class RainfallModule {}
