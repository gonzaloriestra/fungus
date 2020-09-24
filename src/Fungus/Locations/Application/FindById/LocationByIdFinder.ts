import { LocationRepository } from '../../Domain/LocationRepository';

import { FindLocationByIdResponse } from './FindLocationByIdResponse';
import { FindLocationByIdRequest } from './FindLocationByIdRequest';

export default class LocationByIdFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }
  invoke({ locationId }: FindLocationByIdRequest): FindLocationByIdResponse {
    return new FindLocationByIdResponse(this.repository.findById(locationId));
  }
}
