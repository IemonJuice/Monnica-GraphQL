import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './services/auth/auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {JwtStrategyService} from './services/jwt-strategy/jwt-strategy.service';


@Module({
    providers: [AuthService, JwtStrategyService,JwtService,],
    imports: [forwardRef(() => UsersModule),
        JwtModule.register({
            signOptions: {
                expiresIn: '1h'
            },
            secret: 'secret'
        })],
    exports: [AuthService,JwtModule]
})
export class AuthModule {
}
