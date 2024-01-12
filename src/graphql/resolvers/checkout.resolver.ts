import {Args, Int, Mutation, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.object";
import {CarObject} from "../models/car.object";
import {CheckoutService} from "../../features/checkout/services/checkout/checkout.service";


@Resolver(() => User)
export class CheckoutResolver {
    constructor(private checkoutService: CheckoutService) {}

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
}