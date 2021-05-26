import { NestFactory } from '@nestjs/core';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync('./key.pem'),
    cert: readFileSync('./cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200', 'https://weather-station-ui.web.app'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    httpsOptions,
  });

  await app.listen(3443, '0.0.0.0');
}
bootstrap();
