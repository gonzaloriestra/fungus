import { WeatherStation } from './WeatherStation';
import { WeatherStationId } from './WeatherStationId';
import { Coordinate } from './Coordinate';

export interface WeatherStationRepository {
  findById: (id: WeatherStationId) => WeatherStation | undefined;
  findByProximity: (coordinate: Coordinate) => WeatherStation | undefined;
}
