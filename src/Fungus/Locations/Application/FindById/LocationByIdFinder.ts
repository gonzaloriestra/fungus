import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationDoesNotExist } from '../../Domain/LocationDoesNotExist';

import { FindLocationByIdResponse } from './FindLocationByIdResponse';
import { FindLocationByIdRequest } from './FindLocationByIdRequest';

export default class LocationByIdFinder {
  private readonly _repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this._repository = repository;
  }

  run({ locationId }: FindLocationByIdRequest): FindLocationByIdResponse {
    const location = this._repository.findById(locationId);

    if (!location) {
      throw new LocationDoesNotExist(locationId);
    }

    return new FindLocationByIdResponse(location.toPrimitives());
  }
}
