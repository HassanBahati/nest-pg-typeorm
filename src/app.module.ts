import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: PGHOST,
      port: 5432,
      username: PGUSER,
      password: PGPASSWORD,
      database: PGDATABASE,
      entities: ['dist/**/*.entity{.ts, .js'],

      // url: `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`,

      autoLoadEntities: true,
      // ssl: true vs
      ssl: {
        rejectUnauthorized: true,
      },
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
