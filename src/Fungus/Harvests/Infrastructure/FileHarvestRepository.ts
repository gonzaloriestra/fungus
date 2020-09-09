import * as fs from 'fs';
import * as readline from 'readline';

import { Location } from '../../Locations/Domain/Location';

import { HarvestRepository } from '../Domain/HarvestRepository';
import { HarvestId } from '../Domain/HarvestId';
import { Harvest } from '../Domain/Harvest';

export class FileHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;
  filePath: string;

  constructor({
    harvests = [],
    filePath = 'harvests.txt',
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
      const harvest = JSON.parse(line);
      this.harvests.push(harvest);
    });
  }

  nextIdentity(): HarvestId {
    return HarvestId.create();
  }

  findById(id: HarvestId): Harvest | undefined {
    return this.harvests.find((harvest) => harvest.id() === id);
  }

  add(harvest: Harvest): void {
    this.harvests.push(harvest);

    fs.appendFile(this.filePath, `${JSON.stringify(harvest)}\n`, (err) => {
      if (err) throw err; // TODO Define own error
    });
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
    return this.harvests.filter((harvest) => harvest.location().equalTo(location));
  }
}
