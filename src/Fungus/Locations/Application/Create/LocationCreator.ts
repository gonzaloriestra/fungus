import { LocationId } from '../../../Shared/Domain/LocationId';

import { Location } from '../../Domain/Location';
import { LocationRepository } from '../../Domain/LocationRepository';
import { LocationAlreadyExist } from '../../Domain/LocationAlreadyExist';

import { CreateLocationRequest } from './CreateLocationRequest';

export default class LocationCreator {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run({ id, name, zone }: CreateLocationRequest): void {
    this.ensureLocationDoesNotExist(id);

    // To-Do add the weatherStation to the Location
    // zone.midpoint();

    const location = new Location({ id, name, zone });

    this.repository.add(location);
  }

  ensureLocationDoesNotExist(id: LocationId): void {
    const existentLocation = this.repository.findById(id);

    if (existentLocation) {
      throw new LocationAlreadyExist(id);
    }
  }
}
