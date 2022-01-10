import { WeatherStation } from './WeatherStation';
import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';
import { Coordinate } from '../../../Shared/Domain/Coordinate';

export interface WeatherStationRepository {
  findById: (id: WeatherStationId) => WeatherStation | undefined;
  findByProximity: (coordinate: Coordinate) => WeatherStation | undefined;
}
