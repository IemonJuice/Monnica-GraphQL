import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {Car} from "../../database/entities/car.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Resolver(() => Car)
export class CarsResolver {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {
    }

    @Query(() => [Car])
    public async cars(
        @Args('pageNumber', {type: () => Int}) pageNumber: number): Promise<Car[]> {
        const itemsPerPage = 6;
        const skip = (pageNumber - 1) * itemsPerPage;

        return await this.carRepository.createQueryBuilder()
            .select()
            .skip(skip)
            .take(itemsPerPage)
            .getMany();
    }
}
