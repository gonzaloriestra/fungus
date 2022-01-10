import faker from 'faker';

import { WeatherConditionFactory } from './WeatherConditions/WeatherConditionFactory';
import { Conditions } from './Conditions';

export default class ConditionsMother {
  static create({ type, ...attrs }: { type: string }): Conditions {
    return new Conditions({ conditions: [WeatherConditionFactory.fromPrimitives({ type, ...attrs })] });
  }

  // To-Do avoid this ts-ignore
  static random(): Conditions {
    return this.create({
      type: 'accumulatedPrecipitation',
      // @ts-ignore
      accumulation: faker.random.number(200),
      dateRage: faker.random.number(10),
      daysBefore: faker.random.number(60),
    });
  }
}
