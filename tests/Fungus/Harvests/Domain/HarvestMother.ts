import faker from 'faker';

import { LocationId } from '../../../../src/Fungus/Shared/Domain/Locations/LocationId';
import { MushroomId } from '../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';

import { Harvest } from '../../../../src/Fungus/Harvests/Domain/Harvest';
import { HarvestId } from '../../../../src/Fungus/Harvests/Domain/HarvestId';

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
