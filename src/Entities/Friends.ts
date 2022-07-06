import { Users } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Friends {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Users, userId => Users) @JoinTable()
    userId: Users;

    @ManyToMany(type => Users, friends => Users) @JoinTable()
    friends: Users;


    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date; 

}