import { Primitives } from '../../Domain/Location';

export class FindLocationByIdResponse {
  readonly data: Primitives;

  constructor(location: Primitives) {
    this.data = location;
  }
}
