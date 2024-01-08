import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Car} from "../../../../database/entities/car.entity";
import {Repository} from "typeorm";

@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {
    }

    async getCarById(id: number) {
        return await this.carRepository.findOne({
            where: {
                id
            }
        })
    }

    async getCarWithSearchingField(searchingField: string) {
        return this.carRepository.createQueryBuilder('car')
            .select()
            .where("car.rating = :searchingField",
                {searchingField: searchingField})
            .orWhere("car.model = :searchingField",
                {searchingField: searchingField})
            .orWhere("car.price = :searchingField",
                {searchingField: searchingField})
            .orWhere("car.HP = :searchingField",
                {searchingField: searchingField})
            .orWhere("car.releaseDate = :searchingField",
                {searchingField: searchingField})
            .getMany()
    }
}
