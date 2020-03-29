import { v4 as uuidv4 } from 'uuid';

export class LocationId {
  _id: string

  static create() {
    return new LocationId(uuidv4());
  }

  constructor(id: string) {
    this._id = id;
  }

  id() {
    return this._id;
  }

  equalTo(aLocationId: LocationId) {
    return this._id === aLocationId.id();
  }
};
