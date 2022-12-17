import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./product.entity";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

    getProducts(): Promise<Product[]> {
        return this.productRepository.find()
    }

    create(createProductDto: CreateProductDto) {
        return createProductDto
    }

    findProduct(productId: number) {
        return { productId }
    }

    update(updateProductDto: UpdateProductDto, productId: number) {
        return { updateProductDto, productId, message: `Product with id number ${productId} has been updated successfully` }
    }

    delete(productId: number) {
        return { productId, message: `Product with id number ${productId} has been deleted` }
    }
}