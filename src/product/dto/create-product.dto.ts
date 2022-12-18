import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "src/category/category.entity";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsNumber()
    @IsNotEmpty()
    price: number
}