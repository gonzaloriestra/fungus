import { LocationId } from '../../Shared/Domain/Locations/LocationId';

import { LocationRepository } from '../Domain/LocationRepository';
import { Location } from '../Domain/Location';
import { Locations } from '../Domain/Locations';

export class InMemoryLocationRepository implements LocationRepository {
  private _locations: Locations;

  constructor({ locations }: { locations?: Locations } = {}) {
    this._locations = locations || new Locations();
  }

  add(location: Location): void {
    this._locations.add(location);
  }

  findById(id: LocationId): Location | undefined {
    return this._locations.findById(id);
  }

  all(): Locations {
    return this._locations;
  }

  clean(): void {
    this._locations = new Locations();
  }
}
