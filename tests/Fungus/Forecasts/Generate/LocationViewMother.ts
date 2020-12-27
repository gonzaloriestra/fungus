import faker from 'faker';

import { LocationView } from '../../../../src/Fungus/Forecasts/Application/Generate/LocationView';

export default class LocationViewMother {
  static create({
    id = faker.random.uuid(),
    name = faker.random.word(),
  }: {
    id?: string;
    name?: string;
  } = {}): LocationView {
    return new LocationView({ id, name });
  }

  static random(): LocationView {
    return this.create();
  }
}
