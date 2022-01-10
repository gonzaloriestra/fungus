import faker from 'faker';

import { HarvestView } from './HarvestView';

export default class HarvestViewMother {
  static create({
    id = faker.random.uuid(),
    date = faker.date.past().toUTCString(),
    locationId = faker.random.uuid(),
    mushroomId = faker.random.uuid(),
    quantity = faker.random.number(5),
  }: {
    id?: string;
    date?: string;
    locationId?: string;
    mushroomId?: string;
    quantity?: number;
  } = {}): HarvestView {
    return new HarvestView({ id, date, locationId, mushroomId, quantity });
  }

  static random(): HarvestView {
    return this.create();
  }
}
