import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PaginationService } from '../../features/pagination/pagination.service';
import { CarsService } from '../../features/cars/services/cars/cars.service';
import { CarObject } from '../models/car.object';
import { Car } from '../../core/models/car.model';

@Resolver(() => CarObject)
export class CarsResolver {
  constructor(
    private paginationService: PaginationService,
    private carsService: CarsService,
  ) {}

  @Query(() => [CarObject])
  public async getCars(
    @Args('pageNumber', { type: () => Int }) pageNumber: number,
    @Args('priceSortingCriteria', { type: () => String, nullable: true })
    priceSortingCriteria: string,
    @Args('ratingFilterCriteria', { type: () => Int, nullable: true })
    ratingFilterCriteria: number,
    @Args('generalCarInfo', { type: () => String, nullable: true })
    generalCarInfo: string,
  ): Promise<Car[]> {
    return await this.paginationService.getPaginatedCars(
      pageNumber,
      priceSortingCriteria,
      ratingFilterCriteria,
      generalCarInfo,
    );
  }
  @Query(() => CarObject)
  public async getCar(
    @Args('carId', { type: () => Int }) carId: number,
  ): Promise<Car> {
    return await this.carsService.getCarById(carId);
  }
}
