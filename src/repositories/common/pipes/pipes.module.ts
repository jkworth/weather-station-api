import { Module } from '@nestjs/common';
import { ShapeWherePipe } from './shape-where.pipe';

@Module({
  providers: [ShapeWherePipe],
  exports: [ShapeWherePipe],
})
export class PipesModule {}
