import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Condition } from './Condition';
import { Season } from './Season';

export class SeasonCondition implements Condition {
  private readonly _mushroomId: MushroomId;
  private readonly _season: Season;

  constructor({ mushroomId, season }: { mushroomId: MushroomId; season: Season }) {
    this._mushroomId = mushroomId;
    this._season = season;
  }

  async isMet({ date }: { date: Date }): Promise<number> {
    if (this._season.isPeriod({ date })) {
      console.log(`Condition SeasonCondition met as ${date.toUTCString()} is into the period`);
      return 10000;
    }

    console.log(`Condition SeasonCondition is NOT met as ${date.toUTCString()} is not into the period`);
    return 0;
  }

  mushroomId(): MushroomId {
    return this._mushroomId;
  }

  isWeatherCondition(): boolean {
    return false;
  }
}
