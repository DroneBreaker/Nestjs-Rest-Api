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
        return this.categoryRepository.save(createCategoryDto)
    }

    getCategoryById(categoryId: number) {
        return this.categoryRepository.findOne({where: { id: categoryId }})
    }

    updateById(updateCategoryDto: UpdateCategoryDto, categoryId: number) {
        return this.categoryRepository.update(categoryId, updateCategoryDto)
    }

    deleteBydId(categoryId: number) {
        return this.categoryRepository.delete(categoryId)
    }
}