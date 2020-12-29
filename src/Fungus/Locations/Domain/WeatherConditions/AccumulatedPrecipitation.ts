import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from '../WeatherStations/WeatherStation';
import { WeatherService } from '../WeatherStations/WeatherService';

export type Primitives = { mushroomId: string; accumulation: number; periodInDays: number };

// To-Do this should be the initial AccumulatedPrecipitation, so we need to add an grown period
export class AccumulatedPrecipitation implements WeatherCondition {
  private readonly _mushroomId: MushroomId;
  private readonly _accumulation: number;
  private readonly _periodInDays: number;

  constructor({
    mushroomId,
    accumulation,
    periodInDays,
  }: {
    mushroomId: MushroomId;
    accumulation: number;
    periodInDays: number;
  }) {
    this._mushroomId = mushroomId;
    this._accumulation = accumulation;
    this._periodInDays = periodInDays;
  }

  async isMet({
    date,
    weatherStation,
    weatherService,
  }: {
    date: Date;
    weatherStation: WeatherStation;
    weatherService: WeatherService;
  }): Promise<number> {
    // To-Do An entity require a service to execute the check, should I consider another approach?
    const accumulatedPrecipitation = await weatherStation.precipitation({
      from: new Date(date.setDate(date.getDate() - this._periodInDays)),
      to: date,
      weatherService,
    });
    // To-Do value object for the results
    return accumulatedPrecipitation >= this._accumulation ? 10000 : 0;
  }

  mushroomId(): MushroomId {
    return this._mushroomId;
  }

  static fromPrimitives({ mushroomId, accumulation, periodInDays }: Primitives): AccumulatedPrecipitation {
    return new AccumulatedPrecipitation({
      mushroomId: new MushroomId(mushroomId),
      accumulation,
      periodInDays,
    });
  }
}
