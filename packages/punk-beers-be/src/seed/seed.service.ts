import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';
import { PunkApiBeerResponse } from './interfaces/punk-api-beer.interface';

@Injectable()
export class SeedService {
  constructor(private readonly http: AxiosAdapter) {}

  async executedBeerSeed() {
    const beerUrl = `https://api.punkapi.com/v2/beers?page=`;

    let data: PunkApiBeerResponse[] = [];

    for (let i = 1; i < 6; i++) {
      const beers_from_page = await this.http.get<PunkApiBeerResponse[]>(
        `${beerUrl}${i}&per_page=80`,
      );
      data = data.concat(beers_from_page);
    }

    console.log(`All I want for Christmas are: \n\r `);
    data.forEach((beer, index) => {
      console.log(
        `${index + 1} => ${beer.name} | ${beer.tagline} | IBU: ${beer.ibu}`,
      );
    });
    //console.log(data.length)

    return `Seed executed: ${data.length} beers...`;
  }
}
