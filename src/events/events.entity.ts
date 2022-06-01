import { Tasks } from "src/tasks/tasks.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Events {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    host: string; //reference single user as host  //fix this

    @Column({
        nullable: false,
    })
    eventName: string;

    @Column({
        type: "date",
        nullable: false,
    })
    date: Date;

    @Column({
        type: "timestamp with time zone",
        nullable: false,
    })
    time: Timestamp;

    @Column()
    budget: number;

    @ManyToOne(type => Users)
    users: Users;

    @ManyToOne(type => Tasks) //double check relations
    tasks: Tasks;






}