import Date from '../../Shared/Domain/Date';
import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

import { WeatherCondition } from './WeatherCondition';
import { WeatherStation } from './WeatherStation';

export type Primitives = { mushroomId: string; accumulation: number; periodInDays: number };

// To-Do split the domain in folders
export default class AccumulatedPrecipitation implements WeatherCondition {
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

  isMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): number {
    // To-Do const _accumulation = weatherStation.precipitation({from, to});
    return 10000;
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
