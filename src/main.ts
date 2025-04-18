import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BadRequestFilter } from './shared/filters/bad-request.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật ValidationPipe toàn cục
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new BadRequestFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
