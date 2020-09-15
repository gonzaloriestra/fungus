import { LocationRepository } from '../../Domain/LocationRepository';

import { LocationByIdFinderResponse } from './LocationByIdFinderResponse';
import { LocationId } from '../../Domain/LocationId';

export default class LocationByIdFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  invoke(locationId: LocationId): LocationByIdFinderResponse {
    return new LocationByIdFinderResponse(this.repository.findById(locationId));
  }
}
