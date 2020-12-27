import { LocationId } from '../../Shared/Domain/Locations/LocationId';

export class LocationAlreadyExist extends Error {
  constructor(id: LocationId) {
    super(`Location with id: ${id.value()} already exist`);
  }
}
