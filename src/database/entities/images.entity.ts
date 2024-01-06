import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class CarImage {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    imageUrl: string;

    @Field(() => Car)
    @ManyToOne(() => Car, (car) => car.imagesUrl)
    carId: Car;
}