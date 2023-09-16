export interface PunkApiBeerResponse {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: ValueUnitResponse;
  boil_volume: ValueUnitResponse;
  method: MethodResponse;
  ingredients: IngredientsResponse;
  food_pairing: string[];
  brewers_tips: string;
}

export interface ValueUnitResponse {
  value: number;
  unit: string;
}

export interface MethodResponse {
  mash_temp: MashTempResponse[];
  fermentation: FermentationResponse;
  twist: string;
}

export interface MashTempResponse {
  temp: ValueUnitResponse[];
  duration: number;
}

export interface FermentationResponse {
  temp: ValueUnitResponse[];
  duration: number;
}

export interface IngredientsResponse {
  malt: MaltResponse[];
  hops: HopsResponse[];
  yeast: string;
}

export interface MaltResponse {
  name: string;
  amount: ValueUnitResponse;
}
export interface HopsResponse {
  name: string;
  amount: ValueUnitResponse;
  add: string;
  attribute: string;
}
