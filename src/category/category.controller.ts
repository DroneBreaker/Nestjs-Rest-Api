import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { categoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller('categories')
export class CategotyController{
    constructor(private readonly categoryService: categoryService) {}

    @Get()
    allCategories() {
        return this.categoryService.getCategories()
    }

    @Post()
    createProduct(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto)
    }

    @Get('/:categoryId')
    getCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
        return this.categoryService.getCategoryById(categoryId)
    }

    @Patch('/:categoryId')
    updateCategory(@Body() updateCategoryDto: UpdateCategoryDto, @Param( 'categoryId', ParseIntPipe) categoryId: number ) {
        return this.categoryService.updateById(updateCategoryDto, categoryId)
    }

    @Delete('/:categoryId')
    deleteCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
        return this.categoryService.deleteBydId(categoryId)
    }
}