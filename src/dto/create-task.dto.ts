import { Events } from "src/events/events.entity";
import { Timestamp } from "typeorm";

export default class CreateTaskDto {
    readonly description: string; 
    readonly status: boolean;
    readonly points: number;
    readonly events: Events;
    readonly deadline: Date; //Date and Time? 

}