import * as fs from 'fs';
import * as readline from 'readline';

import { Location } from '../../../../Domain/Model/Location/Location';

import { HarvestRepository } from "../../../../Domain/Model/Harvest/HarvestRepository";
import { HarvestId } from '../../../../Domain/Model/Harvest/HarvestId';
import { Harvest } from '../../../../Domain/Model/Harvest/Harvest';


export class FileHarvestRepository implements HarvestRepository {
  harvests: Array<Harvest>;
  filePath: string;

  constructor({ harvests = [], filePath = 'harvest.txt' }: { harvests?: Array<Harvest>, filePath?: string } = {}) {
    this.harvests = harvests;
    this.filePath = filePath;
  }

  nextIdentity() {
    return HarvestId.create()
  }

  findById(id: HarvestId) {
    return this.harvests.find((harvest) => harvest.id() === id);
  }

  async fetch({onFinish = () => {}}: {onFinish?: () => void} = {}) {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.filePath),
      crlfDelay: Infinity
    });

    lineReader.on('close', onFinish);
    lineReader.on('line', async (line) => {
      const harvest = JSON.parse(line);
      this.harvests.push(harvest);
    });
  }

  add(harvest: Harvest) {
    this.harvests.push(harvest);

    fs.appendFile(this.filePath, `${JSON.stringify(harvest)}\n`, function (err: any) {

      if (err) throw err; // TODO Define own error
    });
  };

  count() {
    return this.harvests.length;
  };

  filterBy({ date, location }: { date?: Date, location?: Location } = {}) {
    if(date) {
      return this._filterByDate(date);
    } else if (location) {
      return this._filterByLocation(location);
    } else {
      return this.harvests;
    }
  };

  _filterByDate(date: Date) {
    return this.harvests.filter((harvest) => date.getDay() === harvest.date().getDay() && date.getMonth() === harvest.date().getMonth() && date.getFullYear() === harvest.date().getFullYear());
  }

  _filterByLocation(location: Location) {
    return this.harvests.filter((harvest) => harvest.location().isEqual(location));
  }
}
