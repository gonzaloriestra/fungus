import { isEqual } from 'lodash';

import { LocationId } from '../../Locations/Domain/LocationId';
import { MushroomId } from '../../Mushrooms/Domain/MushroomId';

import { HarvestId } from './HarvestId';

export class Harvest {
  _id: HarvestId;
  _date: Date;
  _locationId: LocationId;
  _mushroomId: MushroomId;
  // To-Do better in a value object
  _quantity?: number;

  constructor({
    id = HarvestId.create(),
    locationId,
    date,
    mushroomId,
    quantity,
  }: {
    id?: HarvestId;
    locationId: LocationId;
    date: Date;
    mushroomId: MushroomId;
    quantity?: number;
  }) {
    this._id = id;
    this._date = date;
    this._locationId = locationId;
    this._mushroomId = mushroomId;
    this._quantity = quantity;
  }

  id(): HarvestId {
    return this._id;
  }

  date(): Date {
    return this._date;
  }

  locationId(): LocationId {
    return this._locationId;
  }

  mushroomId(): MushroomId {
    return this._mushroomId;
  }

  quantity(): number | undefined {
    return this._quantity;
  }

  isEqual(harvest: Harvest): boolean {
    return isEqual(this, harvest);
  }
}
