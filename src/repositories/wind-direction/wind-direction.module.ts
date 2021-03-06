import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common.module';
import { WindDirection } from './wind-direction.entity';
import { WindDirectionResolver } from './wind-direction.resolver';
import { WindDirectionService } from './wind-direction.service';

@Module({
  imports: [TypeOrmModule.forFeature([WindDirection]), CommonModule],
  providers: [WindDirection, WindDirectionService, WindDirectionResolver],
})
export class WindDirectionModule {}
