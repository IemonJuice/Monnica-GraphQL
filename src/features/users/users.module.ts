import {Module} from '@nestjs/common';
import {UsersService} from './services/users/users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user.entity";
import {CarsModule} from "../cars/cars.module";

@Module({
    imports: [TypeOrmModule.forFeature([User]),
        CarsModule],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}
