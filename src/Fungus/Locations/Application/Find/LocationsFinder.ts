import { LocationRepository } from '../../Domain/LocationRepository';
import { Location } from '../../Domain/Location';

import { FindLocationsResponse } from './FindLocationsResponse';
import { FindLocationResponse } from './FindLocationResponse';

export default class LocationsFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run(): FindLocationsResponse {
    return new FindLocationsResponse(this.repository.all().map(this.toResponse()));
  }

  toResponse() {
    return (location: Location): FindLocationResponse =>
      new FindLocationResponse({
        id: location.id().value(),
        name: location.name(),
      });
  }
}
