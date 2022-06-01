import { Events } from "src/events/events.entity";
import { Users } from "src/users/users.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Tasks extends BaseEntity{
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
    
    @OneToOne(type=> Users)
    user: Users; //TODO
}


//time completed task ?