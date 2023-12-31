import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';



import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific options
  const corsOptions: CorsOptions = {
    origin: '*', // You can replace '*' with your frontend domain
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
  };
  app.enableCors(corsOptions);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Adv Web Porject')
    .setDescription('Project Routes')
    .setVersion('1.0')
    .addTag('MidTerm')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  
  await app.listen(8888);
}

bootstrap();
