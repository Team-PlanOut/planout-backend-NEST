import { Users } from "src/users/users.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Friends {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Users, userId => Users) @JoinTable()
    userId: Users;

    @ManyToMany(type => Users, friends => Users) @JoinTable()
    friends: Users;

}