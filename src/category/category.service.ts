import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class categoryService{
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    getCategories(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    create(createCategoryDto: CreateCategoryDto) {
        return createCategoryDto
    }

    getCategory(categoryId: number) {
        return { categoryId}
    }

    update(updateCategoryDto: UpdateCategoryDto, categoryId: number) {
        return {body: updateCategoryDto, categoryId }
    }

    delete(categoryId: number) {
        return { categoryId, message: "Category deleted successfully" }
    }
}