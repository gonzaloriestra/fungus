import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { Harvests } from '../Domain/Harvests';

export class InMemoryHarvestRepository implements HarvestRepository {
  harvests: Harvests;

  constructor({ harvests }: { harvests?: Harvests } = {}) {
    this.harvests = harvests || new Harvests({ harvests: [] });
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find(id);
  }

  add(harvest: Harvest): void {
    this.harvests.add(harvest);
  }

  count(): number {
    return this.harvests.count();
  }

  all(): Harvests {
    return this.harvests;
  }

  clean(): void {
    this.harvests = new Harvests({ harvests: [] });
  }

  filterBy({ date, locationId }: { date?: Date; locationId?: LocationId } = {}): Harvests {
    return this.harvests.filterBy({ date, locationId });
  }
}
