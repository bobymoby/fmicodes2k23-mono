import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true })

    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
    )

    if (process.env.MODE === 'DEV') {
        const config = new DocumentBuilder()
            .setTitle('API Routes')
            .setVersion('1.0')
            .build()
        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('api', app, document)
    }

    await app.listen(3000)
}
bootstrap()
