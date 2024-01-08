import {Field, ObjectType} from "@nestjs/graphql";
import {CarObject} from "./car.object";



@ObjectType()
export class User{

    @Field()
    id:number;

    @Field()
    email:string;

    @Field()
    username:string;


    @Field()
    age:number;


    @Field()
    gender:string;

    @Field()
    password:string;

    @Field(() => [CarObject])
    basket:CarObject[];

    @Field(() => [CarObject])
    liked:CarObject[]

}