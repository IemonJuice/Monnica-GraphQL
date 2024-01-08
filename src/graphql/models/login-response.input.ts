import {Field, InputType} from "@nestjs/graphql";


@InputType()
export class LoginResponse{
    @Field()
    username: string;
    @Field()
    password: string;
}