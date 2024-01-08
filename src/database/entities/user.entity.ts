import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User{
    @PrimaryGeneratedColumn()
    @Field()
    id:number;

    @Column()
    @Field()
    email:string;

    @Column()
    @Field()
    username:string;

    @Column()
    @Field()
    age:number;

    @Column()
    @Field()
    gender:string;

    @Column()
    @Field()
    password:string;

    @Field(() => [Car])
    @ManyToMany(() => Car, (car) => car.usersCheckoutId)
    @JoinTable()
    basket:Car[];

    @Field(() => [Car])
    @ManyToMany(() => Car, (car) => car.usersLikedId)
    @JoinTable()
    liked:Car[]

}