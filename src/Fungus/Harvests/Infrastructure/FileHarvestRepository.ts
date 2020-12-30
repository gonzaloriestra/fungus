import * as fs from 'fs';
import * as readline from 'readline';

import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { Harvests } from '../Domain/Harvests';

export class FileHarvestRepository implements HarvestRepository {
  harvests: Harvests;
  filePath: string;

  constructor({
    harvests = new Harvests({ harvests: [] }),
    filePath = 'database/harvests.txt',
    onLoad,
  }: { harvests?: Harvests; filePath?: string; onLoad?: () => void } = {}) {
    this.harvests = harvests;
    this.filePath = filePath;

    this.__fetch({ onFinish: onLoad });
  }

  __fetch({ onFinish = (): void => undefined }: { onFinish?: () => void } = {}): void {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.filePath),
      crlfDelay: Infinity,
    });

    lineReader.on('close', onFinish);
    lineReader.on('line', (line) => {
      const json = JSON.parse(line);

      this.harvests.add(Harvest.fromPrimitives(json));
    });
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find(id);
  }

  add(harvest: Harvest): void {
    this.harvests.add(harvest);

    fs.appendFile(this.filePath, `${JSON.stringify(harvest.toPrimitives())}\n`, (err) => {
      if (err) throw err; // TODO Define own error
    });
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
    throw new MethodNotImplemented('FileHarvestRepository.clean');
  }
}
