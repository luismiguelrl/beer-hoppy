import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';
import { Model } from 'mongoose';
import { Beer } from './entities/beer.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BeersService {
  constructor(
    @InjectModel(Beer.name) private readonly beerModel: Model<Beer>,
  ) {}

  async create(createBeerDto: CreateBeerDto) {
    try {
      return await this.beerModel.create(createBeerDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  bulk(body: CreateBeerDto[]) {
    try {
      let bulk = this.beerModel.collection.initializeUnorderedBulkOp();

      for (const item of body) bulk.insert(item);

      return bulk.execute();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    return this.beerModel.find({});
  }

  async findOne(query) {
    try {
      return await this.beerModel.findOne(query).exec();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateBeerDto: UpdateBeerDto) {
    return `This action updates a #${id} beer`;
  }

  remove(id: number) {
    return `This action removes a #${id} beer`;
  }

  async removeAll() {
    return await this.beerModel.deleteMany({});
  }
}
