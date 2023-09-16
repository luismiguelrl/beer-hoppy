import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [HttpModule, SeedService],
  imports: [HttpModule, CommonModule],
})
export class SeedModule {}
