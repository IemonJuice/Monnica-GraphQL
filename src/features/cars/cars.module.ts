import { Module } from '@nestjs/common';
import { CarsService } from './services/cars/cars.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Car} from "../../database/entities/car.entity";

@Module({
  providers: [CarsService],
  imports:[TypeOrmModule.forFeature([Car])],
  exports:[CarsService]
})
export class CarsModule {}
