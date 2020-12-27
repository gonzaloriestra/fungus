import { LocationId } from '../../Shared/Domain/LocationId';

import { WeatherStation } from './WeatherStation';

export interface WeatherStationRepository {
  findByLocation: (id: LocationId) => WeatherStation | undefined;
}
