import { isEqual } from 'lodash';

import { Location } from '../../Locations/Domain/Location';
import { Mushroom } from '../../Mushrooms/Domain/Mushroom';

import { HarvestId } from './HarvestId';
import { LocationId } from '../../Locations/Domain/LocationId';
import { MushroomId } from '../../Mushrooms/Domain/MushroomId';
// To-Do Share kernel ?? we are using code from differents modules
export class Harvest {
  _id: HarvestId;
  _date: Date;
  // Aggregate ?
  _locationId: LocationId;
  // Aggregate ?
  _mushroomId?: MushroomId;
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
    mushroomId?: MushroomId;
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

  location(): Location {
    // ToDo Recover the location
    return new Location({ id: this._locationId });
  }

  mushroom(): Mushroom | undefined {
    if (this._mushroomId) {
      return new Mushroom({ id: this._mushroomId });
    }

    return;
  }

  quantity(): number | undefined {
    return this._quantity;
  }

  isEqual(harvest: Harvest): boolean {
    return isEqual(this, harvest);
  }
}
