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
  private _weatherStation?: WeatherStation;

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

  assignWeatherStation({ weatherStation }: { weatherStation: WeatherStation }): void {
    this._weatherStation = weatherStation;
  }

  async isMet({ date }: { date: Date }): Promise<number> {
    // To-Do how to avoid this check, or maybe it is require if we want to have weather conditions without weather station assigned to calculate met
    if (!this._weatherStation) {
      // To-Do Throw exception
      return 0;
    }

    const auxDate = new Date(date);
    const to = new Date(auxDate.setDate(date.getDate() - this._daysBefore));
    const from = new Date(auxDate.setDate(to.getDate() - this._daysRange));

    const accumulatedPrecipitation = await this._weatherStation.precipitation({ from, to });
    // To-Do value object for the results
    if (accumulatedPrecipitation >= this._accumulation) {
      console.log(`Condition AccumulatedPrecipitation met with ${accumulatedPrecipitation} accumulated precipitation`);
      return 10000;
    }

    return 0;
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

  isWeatherCondition(): boolean {
    return true;
  }
}
