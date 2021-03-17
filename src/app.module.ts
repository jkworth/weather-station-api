import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from './configuration/configuration.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [ConfigurationModule, RepositoriesModule],
  controllers: [AppController],
})
export class AppModule {}
