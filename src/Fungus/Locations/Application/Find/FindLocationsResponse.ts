import { FindLocationResponse } from './FindLocationResponse';

export class FindLocationsResponse {
  readonly locations: Array<FindLocationResponse>;

  constructor(locations: Array<FindLocationResponse>) {
    this.locations = locations;
  }
}
