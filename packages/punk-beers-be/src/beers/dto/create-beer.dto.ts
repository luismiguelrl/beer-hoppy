import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class ValueUnitResponse {
  @IsNumber()
  value: number;

  @IsString()
  unit: string;
}
export class MashTempResponse {
  @ValidateNested({ each: true })
  @Type(() => ValueUnitResponse)
  temp: ValueUnitResponse;

  @IsOptional()
  @IsNumber()
  duration: number;
}

export class FermentationResponse {
  @ValidateNested({ each: true })
  @Type(() => ValueUnitResponse)
  temp: ValueUnitResponse;
}

export class MethodResponse {
  @ValidateNested({ each: true })
  @Type(() => MashTempResponse)
  mash_temp: MashTempResponse[];

  @ValidateNested({ each: true })
  @Type(() => FermentationResponse)
  fermentation: FermentationResponse;

  @IsString()
  @IsOptional()
  twist: string | null;
}

export class HopsResponse {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => ValueUnitResponse)
  amount: ValueUnitResponse;

  @IsString()
  add: string;

  @IsString()
  attribute: string;
}

export class IngredientsResponse {
  @ValidateNested()
  @Type(() => HopsResponse)
  hops: HopsResponse[];

  @ValidateNested()
  @Type(() => MaltResponse)
  malt: MaltResponse[];

  @IsString()
  yeast: string;
}

export class MaltResponse {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => ValueUnitResponse)
  amount: ValueUnitResponse;
}

export class CreateBeerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  tagline: string;

  @IsString()
  first_brewed: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  image_url: string;

  @IsNumber()
  @IsNotEmpty()
  abv: number;

  @IsNumber()
  @IsNotEmpty()
  ibu: number;

  @IsNumber()
  @IsNotEmpty()
  target_fg: number;

  @IsNumber()
  @IsNotEmpty()
  target_og: number;

  @IsNumber()
  @IsNotEmpty()
  ebc: number;

  @IsNumber()
  @IsNotEmpty()
  srm: number;

  @IsNumber()
  @IsNotEmpty()
  ph: number;

  @IsNumber()
  attenuation_level: number;

  @ValidateNested()
  @Type(() => ValueUnitResponse)
  volume: ValueUnitResponse;

  @ValidateNested()
  @Type(() => ValueUnitResponse)
  boil_volume: ValueUnitResponse;

  @ValidateNested()
  @Type(() => MethodResponse)
  method: MethodResponse;

  @ValidateNested()
  @Type(() => IngredientsResponse)
  ingredients: IngredientsResponse;

  @IsString({ each: true })
  food_pairing: string[];

  @IsString()
  brewers_tips: string;

  @IsString()
  contributed_by: string;
}
