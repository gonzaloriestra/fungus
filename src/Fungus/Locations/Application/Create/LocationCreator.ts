import { LocationId } from '../../../Shared/Domain/LocationId';

import { WeatherStationRepository } from '../../../Predictions/Domain/WeatherStations/WeatherStationRepository';

import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';

import { CreateLocationRequest } from './CreateLocationRequest';

export class LocationCreator {
  private readonly _locationRepository: LocationRepository;
  private readonly _weatherStationRepository: WeatherStationRepository;

  constructor(locationRepository: LocationRepository, weatherStationRepository: WeatherStationRepository) {
    this._locationRepository = locationRepository;
    this._weatherStationRepository = weatherStationRepository;
  }

  run({ id, name, zone }: CreateLocationRequest): void {
    this.ensureLocationDoesNotExist(id);

    // To-Do We can define a query for this instead of using the repository
    const weatherStation = this._weatherStationRepository.findByProximity(zone.midpoint());

    const location = new Location({ id, name, zone, weatherStationId: weatherStation?.weatherStationId() });

    this._locationRepository.add(location);
  }

  private ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this._locationRepository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
