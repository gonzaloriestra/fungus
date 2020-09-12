import { Location } from '../../Domain/Location';

export class LocationFinderResponse {
  readonly data: Array<{ id: string; name: string }>;

  constructor(locations: Array<Location>) {
    this.data = locations.map((location) => ({ id: location.id().value(), name: location.name() }));
  }
}