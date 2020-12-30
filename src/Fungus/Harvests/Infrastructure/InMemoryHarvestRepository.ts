import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { Harvests } from '../Domain/Harvests';

export class InMemoryHarvestRepository implements HarvestRepository {
  private _harvests: Harvests;

  constructor({ harvests }: { harvests?: Harvests } = {}) {
    this._harvests = harvests || new Harvests({ harvests: [] });
  }

  findById(id: HarvestId): Harvest | undefined {
    return this._harvests.find(id);
  }

  add(harvest: Harvest): void {
    this._harvests.add(harvest);
  }

  count(): number {
    return this._harvests.count();
  }

  all(): Harvests {
    return this._harvests;
  }

  clean(): void {
    this._harvests = new Harvests({ harvests: [] });
  }

  filterBy({ date, locationId }: { date?: Date; locationId?: LocationId } = {}): Harvests {
    return this._harvests.filterBy({ date, locationId });
  }
}
