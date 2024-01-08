import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Car} from "../../database/entities/car.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PaginationService {
    constructor(@InjectRepository(Car) private carsRepository: Repository<Car>) {
    }

    async getPaginatedCars(pageNumber: number, priceSortingCriteria?: string, ratingFilterCriteria?: number) {
        let query = this.carsRepository.createQueryBuilder('car').select()

        if (priceSortingCriteria === "ASC" || priceSortingCriteria === "DESC") {
            await query.orderBy('price', priceSortingCriteria)
        }

        if (ratingFilterCriteria) {
             await query.where("car.rating = :ratingFilterCriteria",
                 {ratingFilterCriteria: ratingFilterCriteria})
        }

        return await query
            .skip((pageNumber - 1) * 6)
            .take(6)
            .getMany();
    }
}
