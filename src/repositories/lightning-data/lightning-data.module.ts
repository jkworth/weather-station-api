import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { LightningDatum } from './lightning-data.entity';
import { LightningDataResolver } from './lightning-data.resolver';
import { LightningDataService } from './lightning-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([LightningDatum]), CommonModule],
  providers: [LightningDatum, LightningDataService, LightningDataResolver],
})
export class LightningDataModule {}
