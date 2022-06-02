import { type } from "os";
import { Events } from "src/events/events.entity";
import { Friends } from "src/friends/friends.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryColumn()
    id: number | string; // from firebase?

    @Column({
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        nullable: false,
    })
    firstName: string;

    @Column({
        nullable: false,
    })
    lastName: string;

    @Column()
    points: number;

    @OneToMany(type => Events, events => events.host, { cascade: true })
    hostedEvents: Events[];

    @ManyToMany(type => Events, events => events.users) @JoinTable() //check
    events: Events[];

    @ManyToMany(type => Tasks, tasks => tasks.users) @JoinTable() //check
    tasks: Tasks[];

    // @ManyToMany(type => Friends, friends => friends.id) @JoinTable()
    // friends: Friends[];

    @ManyToMany(type => Users, (users) => users.following) @JoinTable()
    followers: Users[];

    @ManyToMany(type => Users, (users) => users.followers)
    following: Users[];


    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}