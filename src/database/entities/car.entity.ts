import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CarImage} from "./images.entity";
import {CarColorVariation} from "./colors.entity";

import {User} from "./user.entity";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    HP: number;

    @Column()
    rating: number;


    @Column()
    model: string;

    @Column()

    price: number;

    @Column()

    releaseDate: string;


    @OneToMany(() => CarImage,(carImage) => carImage.carId)
    imagesUrl: Promise<CarImage[]>;


    @OneToMany(() => CarColorVariation, (carColorVariation) => carColorVariation.carId)
    colors: Promise<CarColorVariation[]>;



    @ManyToMany(() => User, user => user.basket, { cascade: ['insert', 'update'] })
    users: User[];


}