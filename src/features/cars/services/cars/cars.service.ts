import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Car} from "../../../../database/entities/car.entity";
import {Repository} from "typeorm";

@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car)
                private carRepository: Repository<Car>) {}

    async getCarById(id: number) {
        return await this.carRepository.findOne({
            where: {
                id
            },
            relations:{
                users:true
            }
        })
    }
}
