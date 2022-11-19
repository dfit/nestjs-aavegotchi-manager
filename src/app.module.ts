import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GotchiModule } from './gotchi/gotchi.module';
const MONGO_URL = process.env.DB_URL || 'mongodb://localhost/gotchi';

@Module({
  imports: [
    MongooseModule.forRoot(`${MONGO_URL}`, { connectionName: 'gotchi' }),
    GotchiModule,
  ]
})
export class AppModule {}
