import { LocationRepository } from '../../Domain/LocationRepository';
import { Locations } from '../../Domain/Locations';

import { FindLocationsByUserIdRequest } from './FindLocationsByUserIdRequest';
import { FindLocationsByUserIdResponse } from './FindLocationsByUserIdResponse';

export default class LocationsByUserIdFinder {
  private readonly _repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this._repository = repository;
  }

  run({ userId }: FindLocationsByUserIdRequest): FindLocationsByUserIdResponse {
    const locations = this._repository.findByUserId(userId) || new Locations();
    console.log(locations);
    return new FindLocationsByUserIdResponse(locations.toPrimitives());
  }
}
