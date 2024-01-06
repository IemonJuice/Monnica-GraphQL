import {Query, Resolver} from "@nestjs/graphql";
import {Car} from "../../database/entities/car.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Resolver(() => Car)
export class CarsResolver {
    constructor(@InjectRepository(Car) private carRepository:Repository<Car>) {}
    @Query(() => [Car])
    public async cars(): Promise<Car[]> {
        return this.carRepository.find()
    }
}