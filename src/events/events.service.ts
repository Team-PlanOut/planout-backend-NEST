import { Injectable } from '@nestjs/common';
import { Events } from './events.entity';
import { Users } from '../users/users.entity';
import CreateEventDto from 'src/dto/create-event.dto'
import UpdateEventDto from 'src/dto/update-event.dto';

@Injectable()
export class EventsService {

    async insert(eventDetails: CreateEventDto) { //Promise <User>
        const EventEntity: Events = Events.create();
        //add whatever we
    };

    async getAllEvents(): Promise<Events[]> {
        return Events.find();
    };

    async getEventById(eventId: number): Promise<Events[]> {
        const event: Events = await Events.findOne({ where: { id: eventId } });
        return event[0];
    };

    async getEventByHostId(hostId: unknown ): Promise<Events[]> {
        try {
            const events: Events[] = await Events.find({ where: { host: hostId } }) //should use the userId as hostId 
            return events;
        }
        catch (err) {
            throw err;
        }
    }

    async updateEventById(eventId: number, UpdateEventDto: UpdateEventDto): Promise<Events[]> {
        // waiting for DTO //
        return
    };


    async deleteEvent(eventId: number): Promise<Events[]> {
        const event: Events = await Events.findOne({ where: { id: eventId } });
        return event[0].delete();
    }

}
