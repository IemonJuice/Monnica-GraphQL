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
import { CheckoutModule } from './features/checkout/checkout.module';
import {CheckoutResolver} from "./graphql/resolvers/checkout.resolver";
import { FileModule } from './features/file/file.module';



@Module({
    providers: [
        CarsResolver,
        UsersResolver,
        CheckoutResolver
    ],
    imports: [
        PaginationModule,

        CarsModule,

        UsersModule,

        AuthModule,

        CheckoutModule,

        ConfigModule.forRoot({
            isGlobal: true,
            load: [ormConfig],
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),

        TypeOrmModule.forRootAsync({
            useFactory:
                process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd
        }),

        FileModule
    ]
})
export class AppModule {}