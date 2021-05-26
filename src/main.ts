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

  let { CERT_DIR, KEY_DIR, API_PORT } = dotenvResults.parsed;

  KEY_DIR = KEY_DIR ?? '.';
  CERT_DIR = CERT_DIR ?? '.';
  API_PORT = API_PORT ?? '3443';

  const httpsOptions = {
    key: readFileSync(KEY_DIR + '/key.pem'),
    cert: readFileSync(CERT_DIR + '/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200', 'https://weather-station-ui.web.app'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    httpsOptions,
  });

  await app.listen(API_PORT, '0.0.0.0');
}
bootstrap();
