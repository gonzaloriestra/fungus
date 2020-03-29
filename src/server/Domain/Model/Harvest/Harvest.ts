import { isEqual } from 'lodash';

import { Location } from '../../../valueObjects/Location';
import { Mushroom } from '../../../valueObjects/Mushroom';

import { HarvestId } from './HarvestId';

export class Harvest {
  _id: HarvestId;
  _date: Date;
  _location: Location;
  _mushroom?: Mushroom;
  _quantity?: number;

  constructor({ id = HarvestId.create(), location, date, mushroom, quantity }: {
    id?: HarvestId,
    location: Location,
    date: Date,
    mushroom?: Mushroom,
    quantity?: number
  }) {
    this._id = id;
    this._date = date;
    this._location = location;
    this._mushroom = mushroom;
    this._quantity = quantity;
  }

  date() {
    return this._date;
  }

  location() {
    return this._location;
  }

  isEqual(harvest: Harvest) {
    return isEqual(this, harvest);
  }
}

