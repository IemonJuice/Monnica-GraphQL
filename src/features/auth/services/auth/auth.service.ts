import {Injectable, NotFoundException} from '@nestjs/common';
import {SignUpDto} from "../../../../core/models/signUp.dto";
import {SignInDto} from "../../../../core/models/signIn.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../../../../database/entities/user.entity";
import * as bcrypt from 'bcrypt';
import {hash} from "bcrypt";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    async login(signInDto: SignInDto) {
        const currentUser = this.userRepository.findOne({
            where: {
                username: signInDto.username,
            }
        }) as User;

        if (!currentUser) {
            throw new NotFoundException('user with this username not found')
        }

        const passwordFromSignInDto = await hash(signInDto.password, 10);

        if (await bcrypt.compare(currentUser.password, passwordFromSignInDto)) {

        }
    }

    register(signUnDto: SignUpDto) {

    }
}
