import faker from 'faker';

import { LocationView } from '../../../../src/Fungus/Predictions/Domain/LocationView';

export default class LocationViewMother {
  static create({
    id = faker.random.uuid(),
    name = faker.random.word(),
    weatherStationId = faker.random.uuid(),
  }: {
    id?: string;
    name?: string;
    weatherStationId?: string;
  } = {}): LocationView {
    return new LocationView({ id, name, weatherStationId });
  }

  static random(): LocationView {
    return this.create();
  }
}
