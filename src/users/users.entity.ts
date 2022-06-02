import { type } from "os";
import { Events } from "src/events/events.entity";
import { Friends } from "src/friends/friends.entity";
import { Tasks } from "src/tasks/tasks.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryColumn()
    id: string | number; // from firebase?

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

    @OneToMany(() => Events, hostedEvents => hostedEvents.host, { cascade: true })
    hostedEvents: Events[];

    @ManyToMany(() => Events, events => events.users) @JoinTable() //check
    events: Events[];

    @ManyToMany(() => Tasks, tasks => tasks.users) @JoinTable() //check
    tasks: Tasks[];

    // @ManyToMany(type => Friends, friends => friends.id) @JoinTable()
    // friends: Friends[];

    @ManyToMany(() => Users, (users) => users.following) @JoinTable()
    followers: Users[];

    @ManyToMany(() => Users, (users) => users.followers)
    following: Users[];


    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}