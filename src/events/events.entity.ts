import { Tasks } from "src/tasks/tasks.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Events {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    host: string; //reference single user as host 

    @Column()
    eventName: string;

    @Column()
    date: Date;

    @Column()
    budget: number;

    @ManyToOne(type => Users)
    users: Users;

    @ManyToOne(type => Tasks) //double check relations
    tasks: Tasks;






}