import { MushroomId } from '../../Shared/Domain/MushroomId';

import { WeatherConditions } from './WeatherConditions';

export interface WeatherConditionRepository {
  findByMushroom: (id: MushroomId) => WeatherConditions;
}
