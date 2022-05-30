import { EventsController } from "src/events/events.controller";
import { TasksController } from "src/tasks/tasks.controller";
import { Column, Entity, JoinTable, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    friendsList: [];

    // @OneToMany(type => Event) @JoinTable()
    // events: Event[]; 

    // @OneToMany(type => Task) @JoinTable()
    // tasks: Task[];

    //check if typeorm has self generated created and update times
}