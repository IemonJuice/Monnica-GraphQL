import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CarImage} from "./images.entity";
import {CarColorVariation} from "./colors.entity";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Car {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Field(() => Int)
    HP: number;

    @Column()
    @Field(() => Int)
    rating: number;

    @Field(() => String)
    @Column()
    model: string;

    @Column()
    @Field(() => Int)
    price: number;

    @Column()
    @Field(() => String)
    releaseDate: string;

    @Field(() => [CarImage])
    @OneToMany(() => CarImage,(carImage) => carImage.carId)
    imagesUrl: Promise<CarImage[]>;

    @Field(() => [CarColorVariation])
    @OneToMany(() => CarColorVariation, (carColorVariation) => carColorVariation.carId)
    colors: Promise<CarColorVariation[]>;

}