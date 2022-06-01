import { Events } from "src/events/events.entity";

export default class UpdateTaskDto {
    readonly description: string; 
    readonly status: boolean;
    readonly points: number;
    readonly events: Events;
    readonly deadline: Date; 
}