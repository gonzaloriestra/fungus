import { Primitives } from '../../Domain/Locations';

export class FindLocationsByUserIdResponse {
  readonly locations: Primitives;

  constructor(locations: Primitives) {
    this.locations = locations;
  }
}
