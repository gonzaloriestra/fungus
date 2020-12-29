import { Primitives } from '../../Domain/Location';

export class FindLocationByIdResponse {
  readonly location: Primitives;

  constructor(location: Primitives) {
    this.location = location;
  }
}
