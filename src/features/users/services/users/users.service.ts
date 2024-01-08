import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../../database/entities/user.entity";
import {Repository} from "typeorm";
import {SignUpDto} from "../../../../core/models/signUp.dto";
import {UserBuilder} from "../../../userBuilder/user.builder";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
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
}
