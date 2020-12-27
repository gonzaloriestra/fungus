import Date from '../../Shared/Domain/Date';
import { MushroomId } from '../../Shared/Domain/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from './WeatherStation';

export class WeatherConditions {
  private readonly weatherConditions: Array<WeatherCondition>;

  constructor({ weatherConditions }: { weatherConditions?: Array<WeatherCondition> } = {}) {
    this.weatherConditions = weatherConditions || [];
  }

  areMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): number {
    return this.weatherConditions.reduce(
      (result, weatherCondition) => (weatherCondition.isMet({ date, weatherStation }) < 10000 ? 0 : result),
      10000,
    );
  }

  add(weatherCondition: WeatherCondition): void {
    this.weatherConditions.push(weatherCondition);
  }

  findByMushroom(mushroomId: MushroomId): WeatherConditions | undefined {
    const weatherConditions = this.weatherConditions.filter((weatherCondition) =>
      weatherCondition.mushroomId().equalTo(mushroomId),
    );

    return new WeatherConditions({ weatherConditions });
  }
}
