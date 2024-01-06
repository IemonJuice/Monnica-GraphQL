import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class CarColorVariation {
    @PrimaryGeneratedColumn()
    @Field()
    id: number
    @Column()
    @Field()
    color: string;
    @Field(() => Car)
    @ManyToOne(() => Car, (car) => car.colors)
    carId: Car;
}