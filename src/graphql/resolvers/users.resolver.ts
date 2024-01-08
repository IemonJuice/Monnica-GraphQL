import {Args, Context, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.object";
import {UsersService} from "../../features/users/services/users/users.service";
import {AuthService} from "../../features/auth/services/auth/auth.service";
import {LoginResponseObject} from "../models/login-response.object";
import {SignInDto} from "../../core/models/signIn.dto";
import {LoginResponseInput} from "../models/login-response.input";
import {RegisterResponseObject} from "../models/register-response.object";
import {RegisterResponseInput} from "../models/register-response.input";


@Resolver(() => User)
export class UsersResolver {
    constructor(private userService: UsersService,
                private authService: AuthService
    ) {
    }

    @Query(() => LoginResponseObject)
    login(@Args('loginCredentials', {type: () => LoginResponseInput}) loginCredentials: SignInDto) {
        return this.authService.login(loginCredentials)
    }

    @Query(() => User)
    profile(@Context() context) {
        const authorizationHeader = context.req.headers.authorization;
        const [bearer, token] = authorizationHeader.split(' ');
        return this.authService.getProfile(token)
    }

    @Mutation(() => RegisterResponseObject)
    register(@Args('user', {type: () => RegisterResponseInput}) user: User) {
        return this.authService.register(user);
    }

}