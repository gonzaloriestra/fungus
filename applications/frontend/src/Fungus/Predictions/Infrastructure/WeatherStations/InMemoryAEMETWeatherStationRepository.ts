import { Coordinate } from '../../../Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';

import { WeatherStation } from '../../Domain/WeatherStations/WeatherStation';
import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { weatherStations as initialWeatherStations } from './weatherStations';

export class InMemoryAEMETWeatherStationRepository implements WeatherStationRepository {
  weatherStations: Array<WeatherStation>;

  constructor({ weatherStations = initialWeatherStations }: { weatherStations?: Array<WeatherStation> } = {}) {
    this.weatherStations = weatherStations || [];
  }

  findById(id: WeatherStationId): WeatherStation | undefined {
    return this.weatherStations.find((weatherStation) => weatherStation.weatherStationId().equalTo(id));
  }

  findByProximity(coordinate: Coordinate): WeatherStation | undefined {
    return this.weatherStations.reduce((closestWeatherStation, currentWeatherStation) => {
      if (
        !closestWeatherStation ||
        currentWeatherStation.distanceTo(coordinate) < closestWeatherStation.distanceTo(coordinate)
      ) {
        return currentWeatherStation;
      }

      return closestWeatherStation;
    });
  }
}
