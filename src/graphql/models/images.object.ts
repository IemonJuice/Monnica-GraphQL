import {Entity} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";
import {CarObject} from "./car.object";

@ObjectType()
@Entity()
export class CarImage {

    @Field(() => Int)
    id: number;
    @Field(() => String)

    imageUrl: string;

    @Field(() => CarObject)
    carId: Promise<CarObject>;
}