import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { UpdateuserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get('/users')
    allUsers() {ParseIntPipe
        return this.userService.getUsers()
    }

    @Post('/users')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch('/users/:userId')
    getUser(@Body() updateuserDto: UpdateuserDto , @Param( 'userId', ParseIntPipe) userId: number ) {
        return this.userService.update(updateuserDto, userId)
    }

    @Delete('/users/:userId') 
    deleteUser(@Body() deleteUserDto: DeleteUserDto, @Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(deleteUserDto, userId)
    }
}