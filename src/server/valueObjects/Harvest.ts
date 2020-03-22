import { isEqual } from 'lodash';

import { Location } from './Location';
export class Harvest {
  date: Date;
  location: Location;

  constructor({ location, date }: { location: Location, date: Date }) {
    this.date = date;
    this.location = location;
  }

  getDate() {
    return this.date;
  }

  getLocation() {
    return this.location;
  }

  isEqual(harvest: Harvest) {
    return isEqual(this, harvest);
  }
}
