
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class RegisterResponseInput{
    @Field({nullable:true})
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
}