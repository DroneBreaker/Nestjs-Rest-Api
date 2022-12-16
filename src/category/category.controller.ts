import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { categoryService } from "./category.service";
import { CreateProductDto } from "../product/dto/create-product.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

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

    @Get('/category/:categoryId')
    getCategory(@Param('userId', ParseIntPipe) categoryId: number) {
        return this.categoryService.getCategory(categoryId)
    }

    @Patch('category/:categoryId')
    updateCategory(@Body() updateCategoryDto: UpdateCategoryDto, @Param( 'categoryId', ParseIntPipe) categoryId: number ) {
        return this.categoryService.update(updateCategoryDto, categoryId)
    }

    @Delete('/category/:categoryId')
    deleteCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
        return this.categoryService.delete(categoryId)
    }
}