import { LocationRepository } from '../../Locations/Domain/LocationRepository';

import { LocationQuery } from '../Domain/LocationQuery';
import { LocationView } from '../Domain/LocationView';
import { LocationId } from '../../Shared/Domain/LocationId';

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
  findById(id: LocationId): LocationView | undefined {
    const location = this.repository.findById(id);

    if (!location) {
      return location;
    }

    return new LocationView(location.toPrimitives());
  }
}
