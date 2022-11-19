import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Gotchi, GotchiDocument} from '../schemas/gotchi.schema';
import { GotchiDto } from '../dto/gotchi.dto';

@Injectable()
export class GotchiService {
  constructor(
    @InjectModel(Gotchi.name, "gotchi" )
    private readonly gotchiModel: Model<GotchiDocument>,
  ) {}

  async create(gotchiDto: GotchiDto): Promise<Gotchi> {
    try {
      return await this.gotchiModel.create({...gotchiDto, _id : gotchiDto.id});
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Gotchi[]> {
    return this.gotchiModel.find().exec();
  }

  async findOne(id: string): Promise<Gotchi> {
    return this.gotchiModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.gotchiModel.findByIdAndRemove({ _id: id }).exec();
  }
}
