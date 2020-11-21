import * as fs from 'fs';
import * as readline from 'readline';

import { MethodNotImplemented } from '../../Shared/Domain/MethodNotImplemented';
import { LocationId } from '../../Shared/Domain/LocationId';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';
import { Location } from '../../Locations/Domain/Location';

export class FileHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;
  filePath: string;

  constructor({
    harvests = [],
    filePath = 'database/harvests.txt',
    onLoad,
  }: { harvests?: Array<Harvest>; filePath?: string; onLoad?: () => void } = {}) {
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

      this.harvests.push(Harvest.fromPrimitives(json));
    });
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find((harvest) => harvest.id() === id);
  }

  add(harvest: Harvest): void {
    this.harvests.push(harvest);

    fs.appendFile(this.filePath, `${JSON.stringify(harvest.toPrimitives())}\n`, (err) => {
      if (err) throw err; // TODO Define own error
    });
  }

  count(): number {
    return this.harvests.length;
  }

  all(): Harvest[] {
    return this.harvests;
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

  clean(): void {
    throw new MethodNotImplemented();
  }
}
