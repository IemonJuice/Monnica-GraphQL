import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";


@Entity()
export class CarImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageUrl: string;


    @ManyToOne(() => Car, (car) => car.imagesUrl)
    carId: Promise<Car>;
}