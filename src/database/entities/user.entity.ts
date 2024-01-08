import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";


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

    @ManyToMany(() => Car, (car) => car.usersCheckoutId)
    @JoinTable()
    basket:Car[];

    @ManyToMany(() => Car, (car) => car.usersLikedId)
    @JoinTable()
    liked:Car[]


}