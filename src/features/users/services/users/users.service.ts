import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../../database/entities/user.entity";
import {Repository} from "typeorm";
import {SignUpDto} from "../../../../core/models/signUp.dto";
import {UserBuilder} from "../../../userBuilder/user.builder";
import {UserToChangeObject} from "../../../../graphql/models/user-to-change.object";
import {CarsService} from "../../../cars/services/cars/cars.service";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>, private carsServices: CarsService) {
    }

    async getUserByUsername(username: string) {
        return await this.userRepository.findOne({
            where: {
                username,
            }
        })
    }

    async addNewUserToDataBase(userDto: SignUpDto) {
        const user = new UserBuilder()
            .setUsername(userDto.username)
            .setAge(userDto.age)
            .setGender(userDto.gender)
            .setEmail(userDto.email)
            .setPassword(userDto.password)
            .getUser()

        return await this.userRepository.save(user);
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async changeUserInfo(user: UserToChangeObject) {
        await this.userRepository.update(user.id, user);
        return await this.getUserById(user.id);
    }

    async addToTheCheckout(userId: number, carId: number) {
        const user = await this.userRepository.findOne({
            where:{
                id:userId
            },
            relations: {
                basket:true
            }
        });
        const car = await this.carsServices.getCarById(carId);


        if (user && car) {
            if (!user.basket) {
                user.basket = [];
            }

            user.basket.push(car);
            await this.userRepository.save(user);
            return user.basket
        }
    }
}
