import { isEqual } from 'lodash';

import { LocationId } from '../../Shared/Domain/LocationId';
import { MushroomId } from '../../Shared/Domain/MushroomId';
import Date from '../../Shared/Domain/Date';

import { HarvestId } from './HarvestId';

type Primitives = { id: string; date: string; locationId: string; mushroomId: string; quantity?: number };

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

  toPrimitives(): Primitives {
    return {
      id: this._id.value(),
      date: this._date.toUTCString(),
      locationId: this._locationId.value(),
      mushroomId: this._mushroomId.value(),
      quantity: this._quantity,
    };
  }

  static fromPrimitives({ id, date, locationId, mushroomId, quantity }: Primitives): Harvest {
    return new Harvest({
      id: new HarvestId(id),
      date: new Date(date),
      locationId: new LocationId(locationId),
      mushroomId: new MushroomId(mushroomId),
      quantity,
    });
  }
}
