import { Harvest, Primitives as HarvestPrimitives } from './Harvest';
import { HarvestId } from './HarvestId';
import { LocationId } from '../../Shared/Domain/Locations/LocationId';

export type Primitives = Array<HarvestPrimitives>;

export class Harvests {
  _harvests: Array<Harvest>;

  constructor({ harvests }: { harvests: Array<Harvest> }) {
    this._harvests = harvests;
  }

  add(harvest: Harvest): void {
    this._harvests.push(harvest);
  }

  count(): number {
    return this._harvests.length;
  }

  find(id: HarvestId): Harvest | undefined {
    return this._harvests.find((harvest) => harvest.id() === id);
  }

  filterBy({ date, locationId }: { date?: Date; locationId?: LocationId } = {}): Harvests {
    if (date) {
      return this._filterByDate(date);
    } else if (locationId) {
      return this._filterByLocationId(locationId);
    } else {
      return new Harvests({ harvests: this._harvests });
    }
  }

  _filterByDate(date: Date): Harvests {
    return new Harvests({
      harvests: this._harvests.filter(
        (harvest) =>
          date.getDay() === harvest.date().getDay() &&
          date.getMonth() === harvest.date().getMonth() &&
          date.getFullYear() === harvest.date().getFullYear(),
      ),
    });
  }

  _filterByLocationId(locationId: LocationId): Harvests {
    return new Harvests({ harvests: this._harvests.filter((harvest) => harvest.locationId().equalTo(locationId)) });
  }

  median(): number {
    return this._harvests.reduce((median, harvest) => {
      return median ? (median + harvest.date().dayOfYear()) / 2 : harvest.date().dayOfYear();
    }, 0);
  }

  toPrimitives(): Primitives {
    return this._harvests.map((harvest) => harvest.toPrimitives());
  }

  toArray(): Array<Harvest> {
    return this._harvests;
  }
}
