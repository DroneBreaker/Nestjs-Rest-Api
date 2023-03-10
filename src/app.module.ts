import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, CategoryModule, ProductModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'thezombies',
    database: 'backend_db',
    entities: [User, Category, Product],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
