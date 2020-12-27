import { LocationId } from '../../Shared/Domain/Locations/LocationId';

import { LocationRepository } from '../Domain/LocationRepository';
import { Location } from '../Domain/Location';

export class InMemoryLocationRepository implements LocationRepository {
  locations: Array<Location>;

  constructor({ locations }: { locations?: Array<Location> } = {}) {
    this.locations = locations || [];
  }

  add(location: Location): void {
    this.locations.push(location);
  }

  findById(id: LocationId): Location | undefined {
    return this.locations.find((location) => location.id().equalTo(id));
  }

  all(): Array<Location> {
    return this.locations;
  }

  clean(): void {
    this.locations = [];
  }
}
