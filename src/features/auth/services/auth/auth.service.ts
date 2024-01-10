import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../../../users/services/users/users.service";
import * as bcrypt from 'bcrypt'
import {SignUpDto} from "../../../../core/models/signUp.dto";
import {SignInDto} from "../../../../core/models/signIn.dto";
import {JwtService} from "@nestjs/jwt";
import {UserForChangeInfo} from "../../../../core/models/user.model";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {
    }


    async login(loginCredentials: SignInDto) {
        const existedUser = await this.usersService.getUserByUsername(loginCredentials.username);
        if (!existedUser) {
            throw new UnauthorizedException("User with this username doesn't exist")
        }

        if (!await bcrypt.compare(loginCredentials.password, existedUser.password)) {
            throw new BadRequestException('Wrong password')
        }

        return {
            user: existedUser,
            token: this.jwtService.sign({
                username: existedUser.username,
                sub: existedUser.id
            }, {
                expiresIn: '60m',
                secret: 'secret'
            })
        }
    }

    async register(user: SignUpDto) {

        const existedUser = await this.usersService.getUserByUsername(user.username)

        if (existedUser) {
            throw new UnauthorizedException("User already exists exist")
        }
        user.password = await bcrypt.hash(user.password, 10);
        return {
            user: await this.usersService.addNewUserToDataBase(user),
        };
    }

    async getProfile(token: string) {
        const decodedToken = await this.jwtService.decode(token);
        if (!decodedToken) {
            throw new UnauthorizedException();
        }
        return await this.usersService.getUserById(decodedToken.sub)
    }

    async changeUserInfo(user: UserForChangeInfo) {
        return await this.usersService.changeUserInfo(user)
    }
}
