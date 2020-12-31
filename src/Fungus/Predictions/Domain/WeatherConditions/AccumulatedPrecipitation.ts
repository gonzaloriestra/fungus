import Date from '../../../Shared/Domain/Date';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from '../WeatherStations/WeatherStation';

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

  async isMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): Promise<number> {
    const to = new Date(date.setDate(date.getDate() - this._daysBefore));
    const from = new Date(date.setDate(to.getDate() - this._daysRange));

    const accumulatedPrecipitation = await weatherStation.precipitation({ from, to });
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
