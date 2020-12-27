import { LocationRepository } from '../../Locations/Domain/LocationRepository';

import { LocationQuery } from '../Application/Generate/LocationQuery';
import { LocationView } from '../Application/Generate/LocationView';

export class RepositoryLocationQuery implements LocationQuery {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  all(): Array<LocationView> {
    const locations = this.repository.all();

    return locations.map((location) => new LocationView(location.toPrimitives()));
  }
}
