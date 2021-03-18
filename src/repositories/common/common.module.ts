import { Module } from '@nestjs/common';
import { PipesModule } from './pipes/pipes.module';
import { ApiPubSub } from './pub-sub';

@Module({
  imports: [PipesModule],
  providers: [ApiPubSub],
  exports: [ApiPubSub],
})
export class CommonModule {}
