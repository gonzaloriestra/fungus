import { LocationRepository } from '../../Domain/LocationRepository';

import { LocationFinderResponse } from './LocationFinderResponse';

export default class LocationFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  invoke(): LocationFinderResponse {
    return new LocationFinderResponse(this.repository.all());
  }
}
