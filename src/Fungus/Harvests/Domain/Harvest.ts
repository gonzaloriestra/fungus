import { isEqual } from 'lodash';

import { Location } from '../../Locations/Domain/Location';
import { Mushroom } from '../../Mushrooms/Domain/Mushroom';

import { HarvestId } from './HarvestId';
import { LocationId } from '../../Locations/Domain/LocationId';

export class Harvest {
  _id: HarvestId;
  _date: Date;
  _locationId: LocationId;
  _mushroom?: Mushroom;
  _quantity?: number;

  constructor({
    id = HarvestId.create(),
    locationId,
    date,
    mushroom,
    quantity,
  }: {
    id?: HarvestId;
    locationId: LocationId;
    date: Date;
    mushroom?: Mushroom;
    quantity?: number;
  }) {
    this._id = id;
    this._date = date;
    this._locationId = locationId;
    this._mushroom = mushroom;
    this._quantity = quantity;
  }

  id(): HarvestId {
    return this._id;
  }

  date(): Date {
    return this._date;
  }

  location(): Location {
    // To-Do Recover the location
    return new Location({ id: this._locationId, name: 'prueba', coordinates: [] });
  }

  quantity(): number | undefined {
    return this._quantity;
  }

  isEqual(harvest: Harvest): boolean {
    return isEqual(this, harvest);
  }
}
