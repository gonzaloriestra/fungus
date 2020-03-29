import { isEqual } from 'lodash';

import { LocationId } from './LocationId';

export class Location {
  _id: LocationId;

  constructor({ id = LocationId.create() }: { id?: LocationId} = {}) {
    this._id = id;
  }

  isEqual(harvest: Location) {
    return isEqual(this, harvest);
  }
}
