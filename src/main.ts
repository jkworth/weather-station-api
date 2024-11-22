import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const dotenvResults = dotenv.config();
  if (dotenvResults.error) {
    throw dotenvResults.error;
  } else if (!dotenvResults.parsed) {
    throw new Error('No .env variables found');
  }

  const httpsOptions = {
    key: readFileSync((process.env.KEY_DIR ?? '.') + '/key.pem'),
    cert: readFileSync((process.env.CERT_DIR ?? '.') + '/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200', 'https://weather-station-ui-a49d1.web.app'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    httpsOptions,
  });

  await app.listen(process.env.API_PORT, '0.0.0.0');
}
bootstrap();
