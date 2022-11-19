import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GotchiDocument = HydratedDocument<Gotchi>;

@Schema()
export class Gotchi {
  @Prop({ required: true })
  _id: number;

  @Prop()
  name: string;

  @Prop()
  kinship: number;

  @Prop()
  brs: number;

  @Prop()
  owner: string;
}

export const GotchiSchema = SchemaFactory.createForClass(Gotchi);
