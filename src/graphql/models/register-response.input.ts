import {User} from "../../database/entities/user.entity";
import {Field, InputType, ObjectType} from "@nestjs/graphql";
import {Column, PrimaryGeneratedColumn} from "typeorm";

@InputType()
export class RegisterInput{
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
}