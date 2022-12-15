import { IsEmail, IsString } from "class-validator";

export class DeleteUserDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string
}