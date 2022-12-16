import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategotyController } from "./category.controller";
import { Category } from "./category.entity";
import { categoryService } from "./category.service";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategotyController],
    providers: [categoryService]
})

export class CategoryModule{}