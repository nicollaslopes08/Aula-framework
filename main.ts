import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ;
  await app.listen(3000);
  console.log('Servidor NestJS iniciado!')
}
await bootstrap();
