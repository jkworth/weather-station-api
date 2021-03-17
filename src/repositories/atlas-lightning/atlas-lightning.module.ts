import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { PipesModule } from '../common/pipes/pipes.module';
import { AtlasLightning } from './atlas-lightning.entity';
import { AtlasLightningResolver } from './atlas-lightning.resolver';
import { AtlasLightningService } from './atlas-lightning.service';

@Module({
  imports: [TypeOrmModule.forFeature([AtlasLightning]), PipesModule, CommonModule],
  providers: [AtlasLightning, AtlasLightningService, AtlasLightningResolver],
})
export class AtlasLightningModule {}
