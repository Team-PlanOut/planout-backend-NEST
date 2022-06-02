import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { Users } from 'src/users/users.entity';
import UpdateTaskDto from 'src/dto/update-task.dto';
import CreateTaskDto from 'src/dto/create-task.dto';


@Injectable()
export class TasksService {
    //private tasks: Tasks[] = [];

    async createTask(CreateTaskDto: CreateTaskDto) {

    };

    async getAllTasks(): Promise<Tasks[]> {
        return Tasks.find();
    };

    async getTaskById(taskId: number): Promise<Tasks> {
        const task: Tasks = await Tasks.findOne({ where: { id: taskId } });
        return task;
    };

    // need getTaskByUserId
    async getTasksByUserId(userId: string | unknown): Promise<Tasks[]> {
        const task: Tasks[] = await Tasks.find({ where: { users: userId } }) // need Tasks.users.id reference
        return task;
    }

    // need getTaskByEventId
    async getTaskByEventId(eventId: number): Promise<Tasks[]> {
        const task: Tasks[] = await Tasks.find({ where: { id: eventId } });
        return task;
    }
    // need deleteTask
    async deleteTask(taskId: number): Promise<Tasks[]> {
        const task: Tasks = await Tasks.findOne({ where: { id: taskId } });
        return task[0].delete();

    }
    // need updateTask

    async updateTask(id: number, UpdateTaskDto: UpdateTaskDto): Promise<Tasks[]> {
        //const task: Tasks = await Tasks.findOne({ where: { taskId: Tasks.id } });
        // waiting for DTO //
        return
    }
    /*
        async updateTask(UpdateTaskDto: UpdateTaskDto): Promise<Tasks[]> 
    
    */
}
