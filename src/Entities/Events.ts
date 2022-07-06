import { Tasks } from "src/tasks/tasks.entity";
import { Users } from "src/users/users.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Events extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

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

    @ManyToOne(type => Users, host => host.hostedEvents)
    host: Users;

    @ManyToMany(type => Users, users => users.events) @JoinTable()//many users to a single event
    users: Promise<Users[]>;

    // @ManyToOne(type => Tasks, tasks => tasks.id) @JoinTable()
    // tasks: Tasks[];


    @OneToMany(type => Tasks, tasks => tasks.event, { cascade: true })
    tasks: Tasks[];


    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;

}