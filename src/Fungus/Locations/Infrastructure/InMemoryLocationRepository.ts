import { LocationRepository } from '../Domain/LocationRepository';
import { LocationId } from '../Domain/LocationId';
import { Location } from '../Domain/Location';

export class InMemoryLocationRepository implements LocationRepository {
  locations: Array<Location>;

  constructor({ locations = [] }: { locations?: Array<Location> } = {}) {
    this.locations = locations;
  }

  nextIdentity(): LocationId {
    return LocationId.create();
  }

  add(location: Location): void {
    this.locations.push(location);
  }

  findById(id: LocationId): Location | undefined {
    return this.locations.find((location) => location.id().equalTo(id));
  }
}
