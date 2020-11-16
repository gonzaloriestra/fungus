import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';
import { LocationId } from '../../../Shared/Domain/LocationId';

import { CreateLocationRequest } from './CreateLocationRequest';

export default class LocationCreator {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run({ id, name, area }: CreateLocationRequest): void {
    this.ensureLocationDoesNotExist(id);

    const location = new Location({ id, name, area });

    this.repository.add(location);
  }

  ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this.repository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
