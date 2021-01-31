import Date from '../../Shared/Domain/Date';
import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Condition } from './Condition';

export class SeasonCondition implements Condition {
  private readonly _mushroomId: MushroomId;
  private readonly _from: Date;
  private readonly _to: Date;

  constructor({ mushroomId, from, to }: { mushroomId: MushroomId; from: Date; to: Date }) {
    this._mushroomId = mushroomId;
    this._from = from;
    this._to = to;
  }

  async isMet({ date }: { date: Date }): Promise<number> {
    return date.getMonth() >= this._from.getMonth() && date.getMonth() <= this._to.getMonth() ? 10000 : 0;
  }

  mushroomId(): MushroomId {
    return this._mushroomId;
  }

  isWeatherCondition(): boolean {
    return false;
  }
}
