import { Module } from '@nestjs/common';

import { RegisterService } from './services/register/register.service';
import { LocalStrategyService } from './services/local-strategy/local-strategy.service';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';
import { AuthService } from './services/auth/auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user.entity";

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [RegisterService, LocalStrategyService, JwtStrategyService, AuthService]
})
export class AuthModule {}
