import { Harvest } from './Harvest';
import { Location } from '../valueObjects/Location';

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
    return new HarvestHistory({ harvests: this.harvests.filter((harvest) => date.getDay() === harvest.getDate().getDay() && date.getMonth() === harvest.getDate().getMonth() && date.getFullYear() === harvest.getDate().getFullYear())});
  }

  filterByLocation(location: Location) {
    return new HarvestHistory({
      harvests: this.harvests.filter((harvest) => harvest.getLocation().isEqual(location))});
  }

  toArray() {
    return this.harvests;
  }
}
