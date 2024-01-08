import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car.entity";


@Entity()

export class CarColorVariation {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    color: string;
    @ManyToOne(() => Car, (car) => car.colors)
    carId: Promise<Car>;
}