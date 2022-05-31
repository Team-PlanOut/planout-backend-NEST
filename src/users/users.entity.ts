import { type } from "os";
import { Events } from "src/events/events.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    friendsList: []; // check and fix later

    @Column()
    points: number;

    @OneToMany(type => Events, events=>Events) @JoinTable() //check
    events: Events[]; 

    @OneToMany(type => Tasks, tasks=>Tasks) @JoinTable() //check
    tasks: Tasks[];


    //check if typeorm has self generated created and update times
}