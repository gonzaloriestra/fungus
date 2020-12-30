import { WeatherStation } from './WeatherStation';
import { WeatherStationId } from '../../../Shared/Domain/Predictions/WeatherStations/WeatherStationId';
import { Coordinate } from '../../../Locations/Domain/Coordinate';

export interface WeatherStationRepository {
  findById: (id: WeatherStationId) => WeatherStation | undefined;
  findByProximity: (coordinate: Coordinate) => WeatherStation | undefined;
}
