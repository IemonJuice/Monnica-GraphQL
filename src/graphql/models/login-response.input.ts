import {Field, InputType} from "@nestjs/graphql";


@InputType()
export class LoginResponseInput{
    @Field()
    username: string;
    @Field()
    password: string;
}