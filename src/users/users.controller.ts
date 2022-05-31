import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getAllUsers() {

    }

    @Get('/:id')
    getUserById() {

    }

    @Get('/:name')
    getUserByUserName() {

    }


    @Post()
    createNewUser() {

    }

    @Put(':/id')
    updateUserById(){

    }

    @Delete(':/id')
    deleteUser() {

    }
}
