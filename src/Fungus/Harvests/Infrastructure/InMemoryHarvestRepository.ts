import { Location } from '../../Locations/Domain/Location';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';

export class InMemoryHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;

  constructor({ harvests = [] }: { harvests?: Array<Harvest> } = {}) {
    this.harvests = harvests;
  }

  nextIdentity(): HarvestId {
    return HarvestId.create();
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find((harvest) => harvest.id() === id);
  }

  add(harvest: Harvest): void {
    this.harvests.push(harvest);
  }

  count(): number {
    return this.harvests.length;
  }

  all(): Harvest[] {
    return this.harvests;
  }

  filterBy({ date, location }: { date?: Date; location?: Location } = {}): Array<Harvest> {
    if (date) {
      return this._filterByDate(date);
    } else if (location) {
      return this._filterByLocation(location);
    } else {
      return this.harvests;
    }
  }

  _filterByDate(date: Date): Array<Harvest> {
    return this.harvests.filter(
      (harvest) =>
        date.getDay() === harvest.date().getDay() &&
        date.getMonth() === harvest.date().getMonth() &&
        date.getFullYear() === harvest.date().getFullYear(),
    );
  }

  _filterByLocation(location: Location): Array<Harvest> {
    return this.harvests.filter((harvest) => harvest.location().isEqual(location));
  }
}
