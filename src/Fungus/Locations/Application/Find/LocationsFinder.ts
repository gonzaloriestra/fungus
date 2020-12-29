import { LocationRepository } from '../../Domain/LocationRepository';

import { FindLocationsResponse } from './FindLocationsResponse';

export default class LocationsFinder {
  private readonly _repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this._repository = repository;
  }

  run(): FindLocationsResponse {
    return new FindLocationsResponse(this._repository.all().toPrimitives());
  }
}
