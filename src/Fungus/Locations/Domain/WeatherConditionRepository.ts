import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

import { WeatherConditions } from './WeatherConditions';

export interface WeatherConditionRepository {
  findByMushroom: (id: MushroomId) => WeatherConditions;
}
