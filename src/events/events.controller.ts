import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import UpdateEventDto from 'src/dto/update-event.dto';
import { EventsService } from './events.service';


@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}
    @Get('/')
    getAllEvents() {
        return this.eventsService.getAllEvents();
    }

    @Get('/:id')
    getEventById(eventId) {
        return this.eventsService.getEventById(eventId);
    }

    @Get('/host/:id')
    getEventByHost(hostId: string) {
        return this.eventsService.getEventByHostId(hostId);
    }

    @Post('/')
    saveEvent(eventDetails) {
        return this.eventsService.insert(eventDetails);
    }

    @Put('/:id')
    updateEvent(eventId: number, UpdateEventDto: UpdateEventDto){
        return this.eventsService.updateEventById(eventId, UpdateEventDto);
    }

    @Delete('/:id')
    deleteEvent(eventId: number) {
        return this.eventsService.deleteEvent(eventId);
    }
    
}

