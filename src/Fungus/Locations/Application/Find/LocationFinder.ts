import { LocationRepository } from '../../Domain/LocationRepository';

import { FindLocationsResponse } from './FindLocationsResponse';

export default class LocationFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  invoke(): FindLocationsResponse {
    return new FindLocationsResponse(this.repository.all());
  }
}
