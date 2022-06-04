import { Events } from "src/events/events.entity";
import { Users } from "src/users/users.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name:'Tasks'})
export class Tasks extends BaseEntity {
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

    @ManyToOne(() => Events, event => event.tasks)
    event: Events;

    @ManyToMany(() => Users, users => users.tasks)
    users: Users[];

    @Column("datetime")
    deadline: Date; //Date and time

    // @ManyToMany(type => Users, user => user.id)
    // user: Users[];     

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}
