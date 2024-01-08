import {Resolver} from "@nestjs/graphql";
import {User} from "../models/user.object";



@Resolver(() => User)
export class UsersResolver {
    constructor(
    ) {}

    login(){

    }

    register() {

    }

}