import Date from '../../Shared/Domain/Date';
import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Condition } from './Condition';
import { WeatherStation } from './WeatherStations/WeatherStation';
import { WeatherCondition } from './WeatherConditions/WeatherCondition';

export class Conditions {
  private readonly conditions: Array<Condition>;

  constructor({ conditions }: { conditions?: Array<Condition> } = {}) {
    this.conditions = conditions || [];
  }

  async areMet({ date, weatherStation }: { date: Date; weatherStation: WeatherStation }): Promise<number> {
    return await this.conditions.reduce(async (result: Promise<number>, condition: Condition): Promise<number> => {
      // To-Do it could be an smell that we need to check the time here
      if (condition.isWeatherCondition()) {
        (condition as WeatherCondition).assignWeatherStation({ weatherStation });
      }

      const percentage = await condition.isMet({ date });

      return percentage < 10000 ? 0 : result;
    }, Promise.resolve(10000));
  }

  add(condition: Condition): void {
    this.conditions.push(condition);
  }

  findByMushroom(mushroomId: MushroomId): Conditions {
    const conditions = this.conditions.filter((condition) => condition.mushroomId().equalTo(mushroomId));

    return new Conditions({ conditions });
  }
}
