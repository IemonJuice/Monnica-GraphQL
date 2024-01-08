import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class CarColorVariation {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number
    @Column()
    @Field(() => String)
    color: string;
    @Field(() => Car)
    @ManyToOne(() => Car, (car) => car.colors)
    carId: Promise<Car>;
}