import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getAllTasks() {

    }

    @Get('/:id')
    getTaskById() { }

    @Get('/event/:id')
    getTasksByEvent() {

    }

    @Get('/user/:id')
    getTasksByUser() {

    }

    @Post('/')
    saveTask() {

    }

    @Put('/:id')
    updateTasks() {

    }

    @Delete('/:id')
    deleteTask() {
        
    }


}
