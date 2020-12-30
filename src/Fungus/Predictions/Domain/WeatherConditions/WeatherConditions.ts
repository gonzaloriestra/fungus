import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from '../WeatherStations/WeatherStation';
import { WeatherService } from '../WeatherStations/WeatherService';

export class WeatherConditions {
  private readonly weatherConditions: Array<WeatherCondition>;

  constructor({ weatherConditions }: { weatherConditions?: Array<WeatherCondition> } = {}) {
    this.weatherConditions = weatherConditions || [];
  }

  async areMet({
    date,
    weatherStation,
    weatherService,
  }: {
    date: Date;
    weatherStation: WeatherStation;
    weatherService: WeatherService;
  }): Promise<number> {
    return await this.weatherConditions.reduce(
      async (result: Promise<number>, weatherCondition: WeatherCondition): Promise<number> => {
        const condition = await weatherCondition.isMet({ date, weatherStation, weatherService });
        return condition < 10000 ? 0 : result;
      },
      Promise.resolve(10000),
    );
  }

  add(weatherCondition: WeatherCondition): void {
    this.weatherConditions.push(weatherCondition);
  }

  findByMushroom(mushroomId: MushroomId): WeatherConditions {
    const weatherConditions = this.weatherConditions.filter((weatherCondition) =>
      weatherCondition.mushroomId().equalTo(mushroomId),
    );

    return new WeatherConditions({ weatherConditions });
  }
}
