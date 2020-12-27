import faker from 'faker';

import { WeatherStation } from '../../../../src/Fungus/Locations/Domain/WeatherStation';
import { WeatherStationId } from '../../../../src/Fungus/Locations/Domain/WeatherStationId';
import { Coordinate } from '../../../../src/Fungus/Locations/Domain/Coordinate';

import CoordinateMother from './CoordinateMother';

export default class WeatherStationMother {
  static create({
    weatherStationId = WeatherStationId.create(),
    externalId = faker.random.word(),
    location = CoordinateMother.random(),
    description = faker.random.words(),
  }: {
    weatherStationId?: WeatherStationId;
    externalId?: string;
    location?: Coordinate;
    description?: string;
  } = {}): WeatherStation {
    return new WeatherStation({ weatherStationId, externalId, location, description });
  }

  static random(): WeatherStation {
    return this.create();
  }
}
