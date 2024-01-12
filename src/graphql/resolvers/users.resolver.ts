import {Args, Context, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.object";
import {UsersService} from "../../features/users/services/users/users.service";
import {AuthService} from "../../features/auth/services/auth/auth.service";
import {LoginResponseObject} from "../models/login-response.object";
import {SignInDto} from "../../core/models/signIn.dto";
import {LoginResponseInput} from "../models/login-response.input";
import {RegisterResponseObject} from "../models/register-response.object";
import {RegisterResponseInput} from "../models/register-response.input";
import {UserToChangeObject} from "../models/user-to-change.object";
import {CarObject} from "../models/car.object";
import {Code} from "typeorm";
import {CheckoutService} from "../../features/checkout/services/checkout/checkout.service";


@Resolver(() => User)
export class UsersResolver {
    constructor(
        private userService: UsersService,
        private checkoutService: CheckoutService,
        private authService: AuthService) {
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


    @Mutation(() => [CarObject])
    addToCheckout(
        @Args('userId', {type: () => Int}) userId: number,
        @Args('carId', {type: () => Int}) carId: number) {
        return this.checkoutService.addCarToTheCheckout(userId, carId)
    }

    @Mutation(() => [CarObject])
    removeFromTheCheckout(
        @Args('userId', {type: () => Int}) userId: number,
        @Args('carId', {type: () => Int}) carId: number) {
        return this.checkoutService.removeFromTheCheckout(userId, carId)
    }

    @Mutation(() => RegisterResponseObject)
    register(@Args('user', {type: () => RegisterResponseInput}) user: User) {
        return this.authService.register(user);
    }

    @Mutation(() => UserToChangeObject)
    changeUserInfo(
        @Args('user', {type: () => RegisterResponseInput})
            user: User): Promise<User | UserToChangeObject> {
        return this.authService.changeUserInfo(user);
    }

    @Mutation(() => Int)
    resetUserPassword(
        @Args('oldPassword', {type: () => String}) oldPassword: string,
        @Args('newPassword', {type: () => String}) newPassword: string,
        @Args('userId', {type: () => Number}) userId: number): Promise<number> {
        return this.authService.resetPassword(oldPassword, newPassword, userId);
    }

}