import { MailerModule } from '@nestjs-modules/mailer';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import graphqlConfig from './configs/graphql.config';
import mailerConfig from './configs/mailer.config';
import ormConfig from './configs/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>(graphqlConfig),
    MailerModule.forRootAsync(mailerConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
