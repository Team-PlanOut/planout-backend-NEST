import { Column, Entity } from "typeorm";

@Entity()
export class Friends {

    @Column()
    friends: [];

    @Column()
    relations: boolean; //idk need to think

}