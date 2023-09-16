import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedModule } from './seed/seed.module';
import { BeersModule } from './beers/beers.module';

@Module({
  imports: [SeedModule, BeersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
