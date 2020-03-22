import { Harvest } from './Harvest';
import { Location } from '../../../valueObjects/Location';

export class HarvestHistory {
  harvests: Array<Harvest>;

  constructor({ harvests = [] }: { harvests?: Array<Harvest>} = {}) {
    this.harvests = harvests;
  }

  count() {
    return this.harvests.length;
  }

  add(harvest: Harvest) {
    this.harvests.push(harvest);
  }

  filterByDate(date: Date) {
    return new HarvestHistory({ harvests: this.harvests.filter((harvest) => date.getDay() === harvest.date().getDay() && date.getMonth() === harvest.date().getMonth() && date.getFullYear() === harvest.date().getFullYear())});
  }

  filterByLocation(location: Location) {
    return new HarvestHistory({
      harvests: this.harvests.filter((harvest) => harvest.location().isEqual(location))});
  }

  toArray() {
    return this.harvests;
  }
}
