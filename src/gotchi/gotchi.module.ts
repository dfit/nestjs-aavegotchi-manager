import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Gotchi, GotchiSchema } from './schemas/gotchi.schema';
import { GotchiController } from './controllers/gotchi.controller';
import { GotchiService } from './services/gotchi.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Gotchi.name, schema: GotchiSchema }],
      'gotchi',
    ),
  ],
  controllers: [GotchiController],
  providers: [GotchiService],
})
export class GotchiModule {}
