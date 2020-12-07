import faker from 'faker';

import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { Area } from '../../../../src/Fungus/Locations/Domain/Area';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

import AreaMother from './AreaMother';

export default class LocationMother {
  static create({
    id = LocationId.create(),
    name = faker.random.word(),
    area = AreaMother.random(),
  }: { id?: LocationId; name?: string; area?: Area } = {}): Location {
    return new Location({ id, name, area });
  }

  static random(): Location {
    return this.create();
  }
}
