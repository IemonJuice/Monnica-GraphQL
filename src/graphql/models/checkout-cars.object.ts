import {Field, ObjectType} from "@nestjs/graphql";
import {CarObject} from "./car.object";

@ObjectType()
class CheckoutCars {
    @Field(() => [CarObject])
    basket:CarObject[];
}