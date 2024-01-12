import { Module } from '@nestjs/common';
import { CheckoutService } from './services/checkout/checkout.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user.entity";
import {Car} from "../../database/entities/car.entity";
import {CarsModule} from "../cars/cars.module";

@Module({
  providers: [CheckoutService],
  imports:[TypeOrmModule.forFeature([Car,User]),CarsModule],
  exports:[CheckoutService]
})
export class CheckoutModule {}
