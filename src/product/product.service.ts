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
        return this.productRepository.save(createProductDto)
    }

    findProduct(productId: number) {
        return this.productRepository.findOne({where: { id: productId }})
    }

    updateById(updateProductDto: UpdateProductDto, productId: number) {
        return this.productRepository.update(productId, updateProductDto)
    }

    deleteById(productId: number) {
        return this.productRepository.delete(productId)
    }
}