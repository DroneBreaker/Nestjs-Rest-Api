import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class categoryService{
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    getProducts(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    create(@Body() createCategoryDto: CreateCategoryDto) {
        return createCategoryDto
    }
}