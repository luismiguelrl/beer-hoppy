import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class ValueUnit {
  @Prop({ type: Number })
  value: number;

  @Prop({ type: String })
  unit: string;
}
const ValueUnitSchema = SchemaFactory.createForClass(ValueUnit);

@Schema({ _id: false })
export class MashTemp {
  @Prop({ type: ValueUnitSchema })
  temp: ValueUnit;

  @Prop({ type: Number })
  duration: number;
}
const MashTempSchema = SchemaFactory.createForClass(MashTemp);

@Schema({ _id: false })
export class Fermentation {
  @Prop({ type: ValueUnitSchema })
  temp: ValueUnit;

  @Prop({ type: Number })
  duration?: number;
}
const FermentationSchema = SchemaFactory.createForClass(Fermentation);

@Schema({ _id: false })
export class Method {
  @Prop({ type: [MashTempSchema] })
  mash_temp: MashTemp[];

  @Prop({ type: FermentationSchema })
  fermentation: Fermentation;

  @Prop({ type: String })
  twist: string | null;
}
const MethodSchema = SchemaFactory.createForClass(Method);

Schema({ _id: false });
export class Malt {
  @Prop({ type: String })
  name: string;

  @Prop({ type: ValueUnitSchema })
  amount: ValueUnit;
}
const MaltSchema = SchemaFactory.createForClass(Malt);

Schema({ _id: false });
export class Hops {
  @Prop({ type: String })
  name: string;

  @Prop({ type: ValueUnitSchema })
  amount: ValueUnit;

  @Prop({ type: String })
  add: string;

  @Prop({ type: String })
  attribute: string;
}
const HopsSchema = SchemaFactory.createForClass(Hops);

Schema({ _id: false });
export class Ingredients {
  @Prop({ type: [MaltSchema] })
  malt: Malt[];

  @Prop({ type: [HopsSchema] })
  hops: Hops[];

  @Prop({ type: String })
  yeast: string;
}

@Schema({ timestamps: true, collection: 'beers' })
export class Beer extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  tagline: string;

  @Prop({ type: String })
  first_brewed: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  image_url: string;

  @Prop({ type: Number })
  abv: number;

  @Prop({ type: Number })
  ibu: number;

  @Prop({ type: Number })
  target_fg: number;

  @Prop({ type: Number })
  target_og: number;

  @Prop({ type: Number })
  ebc: number;

  @Prop({ type: Number })
  srm: number;

  @Prop({ type: Number })
  ph: number;

  @Prop({ type: Number })
  attenuation_level: number;

  @Prop({ type: ValueUnitSchema })
  volume: ValueUnit;

  @Prop({ type: ValueUnitSchema })
  boil_volume: ValueUnit;

  @Prop({ type: MethodSchema })
  method: Method;

  @Prop({ type: Ingredients })
  ingredients: Ingredients;

  @Prop({ type: [String] })
  food_pairing: string[];

  @Prop({ type: String })
  brewers_tips: string;

  @Prop({ type: String })
  contributed_by: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);
BeerSchema.index({ name: 1 }, { unique: true });
