import { type } from "os";
import { Events } from "src/events/events.entity";
import { Friends } from "src/friends/friends.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryColumn()
    id: string; // from firebase?

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    points: number;

    @OneToMany(type => Events, events=>Events) @JoinTable() //check
    events: Events[]; 

    @OneToMany(type => Tasks, tasks=>Tasks) @JoinTable() //check
    tasks: Tasks[];

    @ManyToMany(type=>Friends, friends => Friends) @JoinTable()
    friends: number;

    //check if typeorm has self generated created and update times
}