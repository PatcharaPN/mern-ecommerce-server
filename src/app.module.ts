import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://patcharapn:1234@cluster0.3tswjdg.mongodb.net/products',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
