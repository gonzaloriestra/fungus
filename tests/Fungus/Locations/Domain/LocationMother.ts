import faker from 'faker';

import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

import ZoneMother from './ZoneMother';

export default class LocationMother {
  static create({
    id = LocationId.create(),
    name = faker.random.word(),
    zone = ZoneMother.random(),
  }: { id?: LocationId; name?: string; zone?: Zone } = {}): Location {
    return new Location({ id, name, zone });
  }

  static random(): Location {
    return this.create();
  }
}
