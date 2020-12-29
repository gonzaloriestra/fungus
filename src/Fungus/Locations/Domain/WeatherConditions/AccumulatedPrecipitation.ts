import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from '../WeatherStations/WeatherStation';
import { WeatherService } from '../WeatherStations/WeatherService';

export type Primitives = { mushroomId: string; accumulation: number; daysRange: number; daysBefore: number };

export class AccumulatedPrecipitation implements WeatherCondition {
  private readonly _mushroomId: MushroomId;
  private readonly _accumulation: number;
  private readonly _daysRange: number;
  private readonly _daysBefore: number;

  constructor({
    mushroomId,
    accumulation,
    daysRange,
    daysBefore,
  }: {
    mushroomId: MushroomId;
    accumulation: number;
    daysRange: number;
    daysBefore: number;
  }) {
    this._mushroomId = mushroomId;
    this._accumulation = accumulation;
    this._daysRange = daysRange;
    this._daysBefore = daysBefore;
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
    const to = new Date(date.setDate(date.getDate() - this._daysBefore));
    const from = new Date(date.setDate(to.getDate() - this._daysRange));

    const accumulatedPrecipitation = await weatherStation.precipitation({ from, to, weatherService });
    // To-Do value object for the results
    return accumulatedPrecipitation >= this._accumulation ? 10000 : 0;
  }

  mushroomId(): MushroomId {
    return this._mushroomId;
  }

  static fromPrimitives({ mushroomId, accumulation, daysRange, daysBefore }: Primitives): AccumulatedPrecipitation {
    return new AccumulatedPrecipitation({
      mushroomId: new MushroomId(mushroomId),
      accumulation,
      daysRange,
      daysBefore,
    });
  }
}
