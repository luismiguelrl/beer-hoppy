import { Module } from '@nestjs/common';
import { BeersService } from './beers.service';
import { BeersController } from './beers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Beer, BeerSchema } from './entities/beer.schema';

@Module({
  controllers: [BeersController],
  providers: [BeersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Beer.name,
        schema: BeerSchema,
      },
    ]),
  ],
  exports: [BeersService],
})
export class BeersModule {}
