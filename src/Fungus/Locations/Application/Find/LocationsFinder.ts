import { LocationRepository } from '../../Domain/LocationRepository';

import { FindLocationsResponse } from './FindLocationsResponse';

export default class LocationsFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run(): FindLocationsResponse {
    return new FindLocationsResponse(this.repository.all().toPrimitives());
  }
}
