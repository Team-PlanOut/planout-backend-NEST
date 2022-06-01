import { Events } from "src/events/events.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    description: string;

    @Column({
        nullable: false,
    })
    status: boolean;

    @Column()
    points: number;

    @ManyToMany(type => Events) @JoinTable()
    events: Events[];

    @Column("datetime")
    deadline: Date; //Date and time
}


//time completed task ?