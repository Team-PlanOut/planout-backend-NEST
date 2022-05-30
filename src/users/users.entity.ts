import { Events } from "src/events/events.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    points: number;

    @ManyToMany(type => Events) @JoinTable()
    events: Events[]; 

    @ManyToMany(type => Tasks) @JoinTable()
    tasks: Tasks[];

    
    //check if typeorm has self generated created and update times
}