import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GotchiService } from '../services/gotchi.service';
import { Gotchi } from '../schemas/gotchi.schema';
import { GotchiDto } from '../dto/gotchi.dto';

@Controller('gotchis')
export class GotchiController {
  constructor(private readonly gotchiService: GotchiService) {}

  @Post()
  async create(@Body() gotchiDto: GotchiDto) {
    await this.gotchiService.create(gotchiDto);
  }

  @Get()
  async findAll(): Promise<Gotchi[]> {
    return this.gotchiService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Gotchi> {
    return this.gotchiService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.gotchiService.delete(id);
  }
}
