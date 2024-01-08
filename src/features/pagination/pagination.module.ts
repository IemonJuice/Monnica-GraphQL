import {Module} from '@nestjs/common';
import {PaginationService} from './pagination.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Car} from "../../database/entities/car.entity";

@Module({
    providers: [PaginationService],
    imports: [TypeOrmModule.forFeature([Car])],
    exports: [PaginationService]
})
export class PaginationModule {}
