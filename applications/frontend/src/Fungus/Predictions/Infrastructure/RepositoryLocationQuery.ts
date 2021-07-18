import { LocationId } from '../../Shared/Domain/LocationId';

import { LocationRepository } from '../../Locations/Domain/LocationRepository';

import { LocationQuery } from '../Domain/LocationQuery';
import { LocationView } from '../Domain/LocationView';
import { LocationDoesNotExist } from '../../Shared/Domain/LocationDoesNotExist';

export class RepositoryLocationQuery implements LocationQuery {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  all(): Array<LocationView> {
    const locations = this.repository.all();

    return locations.map((location) => new LocationView(location.toPrimitives()));
  }

  // To-Do throw Expection when it does not exists
  findById(id: LocationId): LocationView {
    const location = this.repository.findById(id);

    if (!location) {
      throw new LocationDoesNotExist(id);
    }

    return new LocationView(location.toPrimitives());
  }
}
