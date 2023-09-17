import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';
import { PunkApiBeerResponse } from './interfaces/punk-api-beer.interface';
import { BeersService } from 'src/beers/beers.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly http: AxiosAdapter,
    private readonly beersService: BeersService,
  ) {}

  async executedBeerSeed() {
    const beerUrl = `https://api.punkapi.com/v2/beers?page=`;

    let data: PunkApiBeerResponse[] = [];

    for (let i = 1; i < 6; i++) {
      const beers_from_page = await this.http.get<PunkApiBeerResponse[]>(
        `${beerUrl}${i}&per_page=80`,
      );
      data = data.concat(beers_from_page);
    }

    console.log(`\n I like my water with grains and : \r `);
    data.forEach((beer, index) => {
      console.log(
        ` ${index + 1} => ${beer.name} | ${beer.tagline} | IBU: ${beer.ibu}`,
      );
    });

    if (data.length > 0) {
      await this.beersService.removeAll();
      this.beersService.bulk(data);

      return `Seed executed: ${data.length} beers...`;
    }

    return `I need a huge, no beers today`;
  }
}
