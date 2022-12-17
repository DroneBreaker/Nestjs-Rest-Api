import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "src/category/category.entity";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsDecimal()
    @IsNotEmpty()
    price: number
}