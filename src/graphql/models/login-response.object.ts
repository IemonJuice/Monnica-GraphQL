import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "../../database/entities/user.entity";

@ObjectType()
export class LoginResponse{
    @Field()
    accessToken: string;
    @Field()
    user: User;
}