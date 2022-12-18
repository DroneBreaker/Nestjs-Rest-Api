import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./product.service";

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('/products')
    allProducts() {
        return this.productService.getProducts()
    }

    @Post('/products')
    createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto)
    }

    @Get('/products/:productId')
    getProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.findProduct(productId)
    }

    @Patch('/products/:productId')
    updateProduct(@Body() updateProductDto: UpdateProductDto, @Param( 'productId', ParseIntPipe) productId: number) {
        return this.productService.updateById(updateProductDto, productId)
    }

    @Delete('/products/:productId')
    deleteProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.deleteById(productId)
    }
}