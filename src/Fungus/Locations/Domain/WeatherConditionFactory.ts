import { WeatherCondition } from './WeatherCondition';
import AccumulatedPrecipitation, { Primitives } from './AccumulatedPrecipitation';
import { WeatherConditionNotSupported } from './WeatherConditionNotSupported';

export default class WeatherConditionFactory {
  static fromPrimitives({ type, ...attrs }: { type: string }): WeatherCondition {
    switch (type) {
      case 'accumulatedPrecipitation':
        return AccumulatedPrecipitation.fromPrimitives(attrs as Primitives);
      default:
        throw new WeatherConditionNotSupported({ type });
    }
  }
}
