import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from "src/users/users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/')
    getAllUsers() {
        return this.usersService.getAllUsers(); 
    }

    @Get('/:id')
    getUserById(userId: string) {
        return this.usersService.getUserById(userId);
    }

    @Get('/:name')
    getUserByUserName(userName: string) {
        return this.usersService.getUserByUserName(userName);
    }

    @Post('/')
    createNewUser(userDetails) {
        return this.usersService.insert(userDetails);
    }

    @Put(':/id')
    updateUserById(userId: string){
        return this.usersService.updateUserById(userId);
    }

    @Delete(':/id')
    deleteUser(userId: string) {
        return this.usersService.deleteUser(userId);
    }
}
