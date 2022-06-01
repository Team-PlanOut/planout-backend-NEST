import { Events } from "src/events/events.entity";

export default class UpdateTaskDto {
    description: string; 
    status: boolean;
    points: number;
    events: Events;
    deadline: Date; 
}