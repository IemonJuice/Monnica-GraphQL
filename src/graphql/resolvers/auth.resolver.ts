import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "../../database/entities/user.entity";
import {AuthService} from "../../features/auth/services/auth/auth.service";
import {SignInDto} from "../../core/models/signIn.dto";
import {SignUpDto} from "../../core/models/signUp.dto";

@Resolver(() => User)
export class AuthResolver {
    constructor(private authService: AuthService) {
    }

    @Query(() => User)
    login(@Args('signInDto', {type: () => SignInDto}) signInDto: SignInDto) {
        return this.authService.login(signInDto)
    }

    @Mutation(() => User)
    register(@Args('signInDto', {type: () => SignUpDto}) signUpDto: SignUpDto) {
        return this.authService.register(signUpDto);
    }
}