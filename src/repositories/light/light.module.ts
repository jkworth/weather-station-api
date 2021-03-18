import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { Light } from './light.entity';
import { LightResolver } from './light.resolver';
import { LightService } from './light.service';

@Module({
  imports: [TypeOrmModule.forFeature([Light]), CommonModule],
  providers: [Light, LightService, LightResolver],
})
export class LightModule {}
