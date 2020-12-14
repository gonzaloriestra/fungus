import { Location } from '../../Domain/Location';

export class FindLocationResponse {
  readonly id: string;
  readonly name: string;

  constructor(location: Location) {
    this.id = location.id().value();
    this.name = location.name();
  }
}
