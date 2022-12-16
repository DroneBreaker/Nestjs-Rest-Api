import { Body, Controller, Get, Post } from "@nestjs/common";
import { categoryService } from "./category.service";
import { CreateProductDto } from "../product/dto/create-product.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller()
export class CategotyController{
    constructor(private readonly categoryService: categoryService) {}

    @Get('/category')
    allProducts() {
        return this.categoryService.getProducts()
    }

    @Post('/category')
    createProduct(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto)
    }
}