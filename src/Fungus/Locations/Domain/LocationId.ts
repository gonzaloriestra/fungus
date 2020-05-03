import { v4 as uuidv4 } from 'uuid';

export class LocationId {
  _id: string;

  static create(): LocationId {
    return new LocationId(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  value(): string {
    return this._id;
  }

  equalTo(aLocationId: LocationId): boolean {
    return this.value() === aLocationId.value();
  }
}
