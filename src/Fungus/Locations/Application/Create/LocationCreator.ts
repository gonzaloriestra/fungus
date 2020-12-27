import { LocationId } from '../../../Shared/Domain/Locations/LocationId';

import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';
import { WeatherStationRepository } from '../../Domain/WeatherStationRepository';

import { CreateLocationRequest } from './CreateLocationRequest';

export default class LocationCreator {
  locationRepository: LocationRepository;
  weatherStationRepository: WeatherStationRepository;

  constructor(locationRepository: LocationRepository, weatherStationRepository: WeatherStationRepository) {
    this.locationRepository = locationRepository;
    this.weatherStationRepository = weatherStationRepository;
  }

  run({ id, name, zone }: CreateLocationRequest): void {
    this.ensureLocationDoesNotExist(id);

    const location = new Location({ id, name, zone });

    const weatherStation = this.weatherStationRepository.findByProximity(location.midpoint());

    if (weatherStation) {
      location.assignWeatherStationId(weatherStation.weatherStationId());
    }

    this.locationRepository.add(location);
  }

  ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this.locationRepository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
