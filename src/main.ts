import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import databaseConnectionManager from './database';



databaseConnectionManager.connect().then(async() => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
})

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
