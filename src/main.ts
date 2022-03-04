import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000, () => {
    console.log('Server started at port: ', 5000);
  });
}

start();
