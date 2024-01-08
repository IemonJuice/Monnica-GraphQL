import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from '@nestjs/typeorm';
import * as process from "process";
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {GraphQLModule} from "@nestjs/graphql";
import {CarsResolver} from "./graphql/resolvers/cars.resolver";
import {PaginationModule} from './features/pagination/pagination.module';
import {CarsModule} from './features/cars/cars.module';
import {UsersModule} from './features/users/users.module';
import {AuthModule} from './features/auth/auth.module';
import {UsersResolver} from "./graphql/resolvers/users.resolver";



@Module({
    providers: [CarsResolver, UsersResolver],
    imports: [

        ConfigModule.forRoot({
            isGlobal: true,
            load: [ormConfig],
        }),

        TypeOrmModule.forRootAsync({
            useFactory:
                process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),




        PaginationModule,

        CarsModule,

        UsersModule,

        AuthModule,
    ]
})
export class AppModule {
}
