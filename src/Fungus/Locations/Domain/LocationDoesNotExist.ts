import { LocationId } from '../../Shared/Domain/Locations/LocationId';

export class LocationDoesNotExist extends Error {
  constructor(id: LocationId) {
    super(`Location with id: ${id.value()} does not exist`);
  }
}
