import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field} from "@nestjs/graphql";


@Entity()
export class User{
    @PrimaryGeneratedColumn()

    id:number;

    @Column()

    email:string;

    @Column()

    username:string;

    @Column()

    age:number;

    @Column()
    gender:string;

    @Column()
    password:string;

    @Column({nullable:true})
    @Field({nullable:true})
    avatarImageName:string;

    @ManyToMany(() => Car, car => car.users, { cascade: ['insert', 'update'] })
    @JoinTable()
    basket: Car[];
}