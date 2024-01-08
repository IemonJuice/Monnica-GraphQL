import {User} from "../../database/entities/user.entity";

export class UserBuilder {
    user: User;

    constructor() {
        this.user = new User();
    }

    setEmail(newEmail:string){
        this.user.email = newEmail;
        return this;
    }

    setAge(newAge:number) {
        this.user.age = newAge;
        return this;
    }

    setGender(newGender:string) {
        this.user.gender = newGender;
        return this;
    }

    setPassword(newPassword:string) {
        this.user.password = newPassword;
        return this;
    }
    setUsername(newUsername:string) {
        this.user.username = newUsername;
        return this;
    }
    getUser(){
        return this.user;
    }
}