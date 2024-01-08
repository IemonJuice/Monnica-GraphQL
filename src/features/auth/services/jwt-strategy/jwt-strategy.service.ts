import {Injectable} from '@nestjs/common';
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'sercet',
        });
    }
    async validate (payload:any) {
        return {
            userId:payload.sub,
            username:payload.username
        }
    }
}
