import faker from 'faker';

import { WeatherConditions } from '../../../../src/Fungus/Locations/Domain/WeatherConditions';
import WeatherConditionFactory from '../../../../src/Fungus/Locations/Domain/WeatherConditionFactory';

export default class WeatherConditionsMother {
  static create({ type, ...attrs }: { type: string }): WeatherConditions {
    return new WeatherConditions({ weatherConditions: [WeatherConditionFactory.fromPrimitives({ type, ...attrs })] });
  }

  // To-Do avoid this ts-ignore
  static random(): WeatherConditions {
    return this.create({
      type: 'accumulatedPrecipitation',
      // @ts-ignore
      accumulation: faker.random.number(),
      periodInDays: faker.random.number(),
    });
  }
}
