import {Field, ObjectType} from "@nestjs/graphql";




@ObjectType()
export class UserToChangeObject{

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


}