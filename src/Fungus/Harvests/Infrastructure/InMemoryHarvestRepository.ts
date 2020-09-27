import { Location } from '../../Locations/Domain/Location';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { LocationId } from '../../Locations/Domain/LocationId';
import { MushroomId } from '../../Mushrooms/Domain/MushroomId';

const initialHarvests = [
  new Harvest({
    id: new HarvestId('42753c82-c5f0-40ce-b068-b5fabc9bf890'),
    date: new Date(),
    locationId: new LocationId('9aa0c161-109c-496e-bec1-e64356d251f5'),
    mushroomId: new MushroomId('9f201a5a-4cbb-427c-935d-0a52b0bf4742'),
    quantity: 3,
  }),
  new Harvest({
    id: new HarvestId('bf4ff3ec-108e-4b7e-b65a-943a59728dc7'),
    date: new Date(),
    locationId: new LocationId('9aa0c161-109c-496e-bec1-e64356d251f5'),
    mushroomId: new MushroomId('0ce9affe-79b3-473c-9c0d-31976d04e149'),
    quantity: 3,
  }),
  new Harvest({
    id: new HarvestId('5428837f-26f0-4f9c-bd81-1811efd6a9af'),
    date: new Date(),
    locationId: new LocationId('9aa0c161-109c-496e-bec1-e64356d251f5'),
    mushroomId: new MushroomId('84270069-10a2-4c52-80be-9dd8a70f47a3'),
    quantity: 3,
  }),
  new Harvest({
    id: new HarvestId('c690fcd2-2e93-4198-ac7c-cc631f662e92'),
    date: new Date(),
    locationId: new LocationId('c55d5235-c7c8-437d-b609-e15955f7867e'),
    mushroomId: new MushroomId('9f201a5a-4cbb-427c-935d-0a52b0bf4742'),
    quantity: 3,
  }),
  new Harvest({
    id: new HarvestId('524518e3-d0d0-42b9-bd88-7e0a65945232'),
    date: new Date(),
    locationId: new LocationId('c55d5235-c7c8-437d-b609-e15955f7867e'),
    mushroomId: new MushroomId('0ce9affe-79b3-473c-9c0d-31976d04e149'),
    quantity: 3,
  }),
];

export class InMemoryHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;

  constructor({ harvests = initialHarvests }: { harvests?: Array<Harvest> } = {}) {
    this.harvests = harvests;
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
    return this.harvests.filter((harvest) => harvest.location().equalTo(location));
  }
}
