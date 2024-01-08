import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from "process";
import {Car} from "../database/entities/car.entity";
import {CarImage} from "../database/entities/images.entity";
import {CarColorVariation} from "../database/entities/colors.entity";
import {User} from "../database/entities/user.entity";

export default  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'example',
    database: 'monnica',
    entities: [Car,CarImage,CarColorVariation,User],
    synchronize: true,
});
