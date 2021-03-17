import { Module } from '@nestjs/common';
import { AccessStatusModule } from './access-status/access-status.module';
import { ArchiveModule } from './archive/archive.module';
import { AtlasLightningModule } from './atlas-lightning/atlas-lightning.module';
import { AtlasStatusModule } from './atlas-status/atlas-status.module';
import { CommonModule } from './common/common.module';
import { PipesModule } from './common/pipes/pipes.module';
import { DailyRainModule } from './daily-rain/daily-rain.module';
import { HumidityModule } from './humidity/humidity.module';
import { IrisStatusModule } from './iris-status/iris-status.module';
import { LightModule } from './light/light.module';
import { LightningDataModule } from './lightning-data/lightning-data.module';
import { PressureModule } from './pressure/pressure.module';
import { RainfallModule } from './rainfall/rain.module';
import { TemperatureModule } from './temperature/temperature.module';
import { UVIndexModule } from './u-v-index/u-v-index.module';
import { WindDirectionModule } from './wind-direction/wind-direction.module';
import { WindSpeedModule } from './wind-speed/wind-speed.module';

@Module({
  imports: [
    PipesModule,
    CommonModule,
    AccessStatusModule,
    ArchiveModule,
    AtlasStatusModule,
    AtlasLightningModule,
    DailyRainModule,
    HumidityModule,
    IrisStatusModule,
    LightModule,
    LightningDataModule,
    PressureModule,
    RainfallModule,
    TemperatureModule,
    UVIndexModule,
    WindDirectionModule,
    WindSpeedModule,
  ],
})
export class RepositoriesModule {}
