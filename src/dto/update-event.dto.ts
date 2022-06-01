export default class UpdateEventDto {
    readonly eventName: string;
    readonly date: Date;
    readonly time: Date; //Timestamp?
    readonly hostId: number;
    readonly budget: number;
}