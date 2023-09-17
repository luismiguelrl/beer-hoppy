import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from 'src/common/common.module';
import { BeersModule } from 'src/beers/beers.module';

@Module({
  controllers: [SeedController],
  providers: [HttpModule, SeedService],
  imports: [HttpModule, CommonModule, BeersModule],
})
export class SeedModule {}
