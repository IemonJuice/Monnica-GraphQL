import {Field,  Int, ObjectType} from "@nestjs/graphql";
import {CarObject} from "./car.object";


@ObjectType()
export class CarColorVariation {
    @Field(() => Int)
    id: number
    @Field(() => String)
    color: string;
    @Field(() => CarObject)
    carId: Promise<CarObject>;
}