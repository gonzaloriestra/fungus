import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationDoesNotExist } from '../../Domain/LocationDoesNotExist';

import { FindLocationByIdResponse } from './FindLocationByIdResponse';
import { FindLocationByIdRequest } from './FindLocationByIdRequest';

export default class LocationByIdFinder {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run({ locationId }: FindLocationByIdRequest): FindLocationByIdResponse {
    const location = this.repository.findById(locationId);

    if (!location) {
      throw new LocationDoesNotExist(locationId);
    }

    return new FindLocationByIdResponse(location.toPrimitives());
  }
}
