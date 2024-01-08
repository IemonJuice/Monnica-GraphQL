import {User} from "../../database/entities/user.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class RegisterResponse{
    @Field()
    accessToken:string;
    @Field(() => User)
    user:User;
}