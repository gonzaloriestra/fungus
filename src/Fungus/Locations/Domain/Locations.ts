import { LocationId } from '../../Shared/Domain/LocationId';

import { Location, Primitives as LocationPrimitives } from './Location';

export type Primitives = Array<LocationPrimitives>;

export class Locations {
  private readonly _locations: Array<Location>;

  constructor({ locations = [] }: { locations?: Array<Location> } = {}) {
    this._locations = locations;
  }

  add(location: Location): void {
    this._locations.push(location);
  }

  findById(id: LocationId): Location | undefined {
    return this._locations.find((location) => location.id().equalTo(id));
  }

  map<T>(callback: (value: Location) => T): T[] {
    return this._locations.map<T>(callback);
  }

  toPrimitives(): Primitives {
    return this._locations.map((location) => location.toPrimitives());
  }
}
