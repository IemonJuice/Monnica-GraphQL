import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CarImage} from "./images.entity";
import {CarColorVariation} from "./colors.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Car {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Field()
    HP: number;

    @Column()
    @Field()
    model: string;

    @Column()
    @Field()
    price: number;

    @Column()
    @Field()
    releaseDate: string;

    @Field(() => [CarImage])
    @OneToMany(() => CarImage,(carImage) => carImage.carId)
    imagesUrl: CarImage[];

    @Field(() => [CarColorVariation])
    @OneToMany(() => CarColorVariation, (carColorVariation) => carColorVariation.carId)
    colors: CarColorVariation[];

}