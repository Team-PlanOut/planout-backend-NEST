import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from "src/tasks/tasks.service";


@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(taskId: number) {
        return this.tasksService.getTaskById(taskId)
    }

    @Get('/event/:id')
    getTasksByEvent(eventId: number) {
        return this.tasksService.getTaskByEventId(eventId)

    }

    @Get('/user/:id')
    getTasksByUser(userId: string) {
        return this.tasksService.getTasksByUserId(userId);

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
