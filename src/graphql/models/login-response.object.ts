import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "./user.object";


@ObjectType()
export class LoginResponseObject{
    @Field()
    token: string;
    @Field()
    user: User;
}