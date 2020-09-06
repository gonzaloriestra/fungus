import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';
import { LocationId } from '../../Domain/LocationId';

import { LocationCreatorRequest } from './LocationCreatorRequest';

export default class LocationCreator {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  invoke({ id, name, coordinates }: LocationCreatorRequest): void {
    this.ensureLocationDoesNotExist(id);

    const location = new Location({ id, name, coordinates });

    this.repository.add(location);
  }

  ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this.repository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
