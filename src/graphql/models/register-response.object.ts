import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "./user.object";

@ObjectType()
export class RegisterResponseObject{
    @Field(() => User)
    user:User;
    @Field()
    token:string;
}
