import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {Car} from "../../database/entities/car.entity";
import {PaginationService} from "../../features/pagination/pagination.service";
import {CarsService} from "../../features/cars/services/cars/cars.service";


@Resolver(() => Car)
export class CarsResolver {
    constructor(
        private paginationService:PaginationService,
        private carsService:CarsService
    ) {}

    @Query(() => [Car])
    public async getCars(
        @Args('pageNumber', {type: () => Int}) pageNumber: number,
        @Args('priceSortingCriteria', {type: () => String,nullable:true}) priceSortingCriteria:string,
        @Args('ratingFilterCriteria',{type: () => Int,nullable:true}) ratingFilterCriteria:number
    ): Promise<Car[]> {
        return await this.paginationService.getPaginatedCars(
            pageNumber,
            priceSortingCriteria,
            ratingFilterCriteria);
    }
    @Query(() => Car)
    public async getCar(@Args('carId', {type: () => Int}) carId: number): Promise<Car> {
        return await this.carsService.getCarById(carId)
    }
    @Query(() => [Car])
    public async getCarWithSpecificField(@Args('searchingField', {type: () => String}) searchingField: string): Promise<Car[]> {
        return await this.carsService.getCarWithSearchingField(searchingField)
    }
}