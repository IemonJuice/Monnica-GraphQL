import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './services/users/users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user.entity";
import {CarsModule} from "../cars/cars.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        CarsModule,
        AuthModule
    ],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}
