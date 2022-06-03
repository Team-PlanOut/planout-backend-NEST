import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import CreateUserDto from 'src/dto/create-user.dto';

@Injectable()
export class UsersService {

    async insert(userDetails: CreateUserDto) { //Promise <User>
        const userEntity: Users = Users.create();
        const { firstName } = userDetails;
        userEntity.firstName = firstName; //add whatever we
    };

    async getAllUsers(): Promise<Users[]> {
        return Users.find();
    };

    async getUserById(userId: string): Promise<Users> {
        const user: Users = await Users.findOne({ where: { id: userId } });
        return user;
    };

    async getUserByUserName(userName: string): Promise<Users[]> {
        const user: Users = await Users.findOne({ where: { firstName: userName } })
        return user[0];
    };

    async updateUserById(userId: string): Promise<Users[]> {
        // waiting for DTO //
        return
    };

    async deleteUser(userId: string): Promise<Users[]> {
        const user: Users = await Users.findOne({ where: { id: userId } });
        return user[0].delete();
    }

}
//DO DTO FIRST


// private readonly users: Users[] = []

// create(users: Users) {
//     this.users.push(users);
// }
