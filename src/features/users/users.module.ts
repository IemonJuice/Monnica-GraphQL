import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user.entity";

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UsersService]
})
export class UsersModule {}
