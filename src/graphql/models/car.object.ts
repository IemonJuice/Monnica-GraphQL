
import {Field, Int, ObjectType,} from "@nestjs/graphql";
import {CarImage} from "./images.object";
import {CarColorVariation} from "./colors.object";
import {User} from "./user.object";





@ObjectType()
export class CarObject {

    @Field(() => Int)
    id: number;


    @Field(() => Int)
    HP: number;

    @Field(() => Int)
    rating: number;

    @Field(() => String)
    model: string;

    @Field(() => Int)
    price: number;

    @Field(() => String)
    releaseDate: string;

    @Field(() => [CarImage])
    imagesUrl: Promise<CarImage[]>;

    @Field(() => [CarColorVariation])
    colors: Promise<CarColorVariation[]>;


    @Field(() => [User])
    usersCheckoutId:User[]

    @Field(() => [User])
    usersLikedId:User[]

}