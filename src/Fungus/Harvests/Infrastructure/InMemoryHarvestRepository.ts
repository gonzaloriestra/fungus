import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';

export class InMemoryHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;

  constructor({ harvests }: { harvests?: Array<Harvest> } = {}) {
    this.harvests = harvests || [];
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

  clean(): void {
    this.harvests = [];
  }

  filterBy({ date, locationId }: { date?: Date; locationId?: LocationId } = {}): Array<Harvest> {
    if (date) {
      return this._filterByDate(date);
    } else if (locationId) {
      return this._filterByLocationId(locationId);
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

  _filterByLocationId(locationId: LocationId): Array<Harvest> {
    return this.harvests.filter((harvest) => harvest.locationId().equalTo(locationId));
  }
}
