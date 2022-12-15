import { IsEmail, IsString } from "class-validator";

export class UpdateuserDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string
}