import faker from 'faker';

import { LocationId } from '../../Shared/Domain/LocationId';
import { MushroomId } from '../../Shared/Domain/MushroomId';

import { Harvest } from './Harvest';
import { HarvestId } from './HarvestId';


export default class HarvestMother {
  static create({
    id = HarvestId.create(),
    locationId = LocationId.create(),
    date = faker.date.past(),
    mushroomId = MushroomId.create(),
    quantity = faker.random.number({ min: 1, max: 5 }),
  }: {
    id?: HarvestId;
    locationId?: LocationId;
    date?: Date;
    mushroomId?: MushroomId;
    quantity?: number;
  } = {}): Harvest {
    return new Harvest({ id, locationId, date, mushroomId, quantity });
  }

  static random(): Harvest {
    return this.create();
  }
}
