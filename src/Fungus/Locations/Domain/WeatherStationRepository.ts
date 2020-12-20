import { Location } from './Location';
import { WeatherStation } from './WeatherStation';

export interface WeatherStationRepository {
  findByLocation: (id: Location) => WeatherStation | undefined;
}
