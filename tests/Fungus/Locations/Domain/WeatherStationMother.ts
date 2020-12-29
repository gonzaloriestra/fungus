import faker from 'faker';

import { WeatherStation } from '../../../../src/Fungus/Locations/Domain/WeatherStations/WeatherStation';
import { WeatherStationId } from '../../../../src/Fungus/Locations/Domain/WeatherStations/WeatherStationId';
import { Coordinate } from '../../../../src/Fungus/Locations/Domain/Coordinate';

import CoordinateMother from './CoordinateMother';

export default class WeatherStationMother {
  static create({
    id = WeatherStationId.create(),
    externalId = faker.random.word(),
    location = CoordinateMother.random(),
    description = faker.random.words(),
  }: {
    id?: WeatherStationId;
    externalId?: string;
    location?: Coordinate;
    description?: string;
  } = {}): WeatherStation {
    return new WeatherStation({ id, externalId, location, description });
  }

  static random(): WeatherStation {
    return this.create();
  }
}
