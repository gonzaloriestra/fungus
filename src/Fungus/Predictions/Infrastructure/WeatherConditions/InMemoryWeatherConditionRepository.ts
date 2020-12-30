import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { WeatherConditions } from '../../Domain/WeatherConditions/WeatherConditions';
import { WeatherConditionRepository } from '../../Domain/WeatherConditions/WeatherConditionRepository';

import { weatherConditions } from './weatherConditions';

const initialWeatherConditions = new WeatherConditions({ weatherConditions });

export class InMemoryWeatherConditionRepository implements WeatherConditionRepository {
  private readonly _weatherConditions: WeatherConditions;

  constructor({ weatherConditions = initialWeatherConditions }: { weatherConditions?: WeatherConditions } = {}) {
    this._weatherConditions = weatherConditions || new WeatherConditions();
  }

  findByMushroom(mushroomId: MushroomId): WeatherConditions {
    return this._weatherConditions.findByMushroom(mushroomId);
  }
}
