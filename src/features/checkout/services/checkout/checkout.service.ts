import {BadRequestException,  Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../../database/entities/user.entity";
import {Repository} from "typeorm";
import {CarsService} from "../../../cars/services/cars/cars.service";


@Injectable()
export class CheckoutService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private carsServices: CarsService,

    ) {}

    async addCarToTheCheckout(userId: number, carId: number) {
        const user = await this.userRepository.findOne({
            where: {id: userId},
            relations: {basket: true}
        });

        const car = await this.carsServices.getCarById(carId);

        if (user && car) {
            if (!user.basket) {
                user.basket = [];
            }

            const isCarInBasket = user.basket.some(item => item.id === car.id);

            if (!isCarInBasket) {
                user.basket.push(car);
                await this.userRepository.save(user);
            }

            return user.basket;
        }

        throw new BadRequestException('user or car not found')
    }

    async removeFromTheCheckout(userId: number, carId: number) {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: {
                basket: true
            }
        });

        const car = await this.carsServices.getCarById(carId);

        if (user && car) {
            if (!user.basket) {
                return
            }

            user.basket = user.basket.filter(value => value.id !== car.id)
            await this.userRepository.save(user);
            return user.basket
        }
        throw new BadRequestException('user or car not found')
    }
}
