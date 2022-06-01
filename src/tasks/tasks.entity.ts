import { Events } from "src/events/events.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    status: boolean;

    @Column()
    points: number;

    @ManyToMany(type => Events) @JoinTable()
    events: Events[];


}


//time completed task ?