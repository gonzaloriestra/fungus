import { isEqual } from 'lodash';

import { Location } from '../valueObjects/Location';
import { Mushroom } from '../valueObjects/Mushroom';

export class Harvest {
  date: Date;
  location: Location;
  mushroom: Mushroom;
  quantity: Number;

  constructor({ location, date, mushroom, quantity }: {
    location: Location,
    date: Date,
    mushroom: Mushroom,
    quantity: Number
  }) {
    this.date = date;
    this.location = location;
    this.mushroom = mushroom;
    this.quantity = quantity;
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

