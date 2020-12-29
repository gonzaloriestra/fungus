import { Primitives } from '../../Domain/Locations';

export class FindLocationsResponse {
  readonly locations: Primitives;

  constructor(locations: Primitives) {
    this.locations = locations;
  }
}
