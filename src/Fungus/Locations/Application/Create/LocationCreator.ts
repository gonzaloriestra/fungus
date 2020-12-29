import { LocationId } from '../../../Shared/Domain/Locations/LocationId';

import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';
import { WeatherStationRepository } from '../../Domain/WeatherStations/WeatherStationRepository';

import { CreateLocationRequest } from './CreateLocationRequest';

// To-Do Add test here
export class LocationCreator {
  private readonly _locationRepository: LocationRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;

  constructor(locationRepository: LocationRepository, weatherStationRepository: WeatherStationRepository) {
    this._locationRepository = locationRepository;
    this._weatherStationRepository = weatherStationRepository;
  }

  run({ id, name, zone }: CreateLocationRequest): void {
    this.ensureLocationDoesNotExist(id);

    const weatherStation = this._weatherStationRepository.findByProximity(zone.midpoint());

    const location = new Location({ id, name, zone, weatherStationId: weatherStation?.weatherStationId() });

    this._locationRepository.add(location);
  }

  ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this._locationRepository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
