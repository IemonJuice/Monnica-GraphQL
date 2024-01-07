import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {Car} from "../../database/entities/car.entity";
import {PaginationService} from "../../features/pagination/pagination.service";


@Resolver(() => Car)
export class CarsResolver {
    constructor(private paginationService:PaginationService) {}

    @Query(() => [Car])
    public async cars(
        @Args('pageNumber', {type: () => Int}) pageNumber: number,
        @Args('priceSortingCriteria', {type: () => String,nullable:true}) priceSortingCriteria:string,
        @Args('ratingFilterCriteria',{type: () => Int,nullable:true}) ratingFilterCriteria:number
    ): Promise<Car[]> {
        return await this.paginationService.getPaginatedCars(
            pageNumber,
            priceSortingCriteria,
            ratingFilterCriteria);
    }
}