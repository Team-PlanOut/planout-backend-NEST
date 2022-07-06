import { Controller, Get } from '@nestjs/common';

@Controller('friends')
export class FriendsController {

    @Get()
    getAllFriends() {

    }

    @Get() //TODO
    getFriendsById() {

    }

    @Get() //TODO
    getSharedFriendEventsById(){

    }
}
