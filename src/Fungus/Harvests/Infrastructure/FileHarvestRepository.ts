import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { LocationId } from '../../Shared/Domain/LocationId';
import { FileRepository } from '../../Shared/Infrastructure/FileRepository';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { Harvests } from '../Domain/Harvests';

export class FileHarvestRepository extends FileRepository implements HarvestRepository {
  private readonly harvests: Harvests;

  constructor({
    harvests = new Harvests({ harvests: [] }),
    filePath = 'database/harvests.txt',
  }: { harvests?: Harvests; filePath?: string } = {}) {
    super({ filePath });

    this.harvests = harvests;

    this.readAll({
      onLineRead: (json) => {
        this.harvests.add(Harvest.fromPrimitives(json));
      },
    });
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find(id);
  }

  add(harvest: Harvest): void {
    this.harvests.add(harvest);

    this.write(harvest);
  }

  count(): number {
    return this.harvests.count();
  }

  all(): Harvests {
    return this.harvests;
  }

  filterBy({ date, locationId }: { date?: Date; locationId?: LocationId } = {}): Harvests {
    return this.harvests.filterBy({ date, locationId });
  }

  clean(): void {
    this.cleanContent();
  }
}
