import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('events')
export class EventsController {
    @Get('/')
    getAllEvents() {

    }

    @Get()
    getEventById() {

    }

    @Get('/:name') 
    getEventByName() {

    }

    @Get('/host/:id')
    getEventByHost() {

    }

    @Post('/')
    saveEvent() {

    }

    @Put('/:id')
    updateEvent(){

    }

    @Delete('/:id')
    deleteEvent() {}

}
