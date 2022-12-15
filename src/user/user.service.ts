import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateuserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    getUsers(): Promise<User[]> {
        return this.userRepository.find()
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto
    }

    update(updateUserDto: UpdateuserDto, userId: number) {
        return {body: updateUserDto, userId}
    }

    delete(deleteUserDto: DeleteUserDto, userId: number) {
        return {body: deleteUserDto, userId, message: 'Deleted Successfully'}
    }
}