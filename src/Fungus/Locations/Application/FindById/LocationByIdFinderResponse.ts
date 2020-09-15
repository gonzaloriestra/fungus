import { Location } from '../../Domain/Location';

export class LocationByIdFinderResponse {
  readonly data: { id: string; name: string } | undefined;

  constructor(location?: Location) {
    if (location) {
      this.data = { id: location.id().value(), name: location.name() };
    }
  }
}
