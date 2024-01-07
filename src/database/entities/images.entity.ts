import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class CarImage {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    imageUrl: string;

    @Field(() => Car)
    @ManyToOne(() => Car, (car) => car.imagesUrl)
    carId: Promise<Car>;
}