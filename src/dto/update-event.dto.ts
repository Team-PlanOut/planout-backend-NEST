export default class UpdateEventDto {
    eventName: string;
    date: Date;
    time: Date; //Timestamp?
    host: string | number;
    budget: number;
}