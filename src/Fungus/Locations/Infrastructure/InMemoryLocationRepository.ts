import { LocationId } from '../../Shared/Domain/LocationId';
import { UserId } from '../../Shared/Domain/UserId';

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

  clean(): void {
    this._locations = new Locations();
  }

  all(): Locations {
    return this._locations;
  }

  findById(id: LocationId): Location | undefined {
    return this._locations.findById(id);
  }

  findByUserId(userId: UserId): Locations | undefined {
    return this._locations.findByUserId(userId);
  }
}
