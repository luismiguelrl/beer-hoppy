import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedModule } from './seed/seed.module';
import { BeersModule } from './beers/beers.module';
import mongoConfig from './config/mongo.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(mongoConfig.mongo_uri),
    SeedModule,
    BeersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
