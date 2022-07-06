import { Events } from "src/events/events.entity";
import { Timestamp } from "typeorm";

export default class CreateTaskDto {
    description: string; 
    status: boolean;
    points: number;
    events: Events;
    deadline: Date; //Date and Time? 

}