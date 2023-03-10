import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateuserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get('/users')
    allUsers() {
        return this.userService.getUsers()
    }

    @Post('/users')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Get('/users/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.getUser(userId)
    }

    @Patch('/users/:userId')
    updateUser(@Body() updateuserDto: UpdateuserDto , @Param( 'userId', ParseIntPipe) userId: number ) {
        return this.userService.updateById(updateuserDto, userId)
    }

    @Delete('/users/:userId') 
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.deleteById(userId)
    }
}