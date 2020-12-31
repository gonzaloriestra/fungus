import faker from 'faker';

import { Coordinate } from '../../../../src/Fungus/Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../../src/Fungus/Shared/Domain/WeatherStationId';

import { WeatherStation } from '../../../../src/Fungus/Predictions/Domain/WeatherStations/WeatherStation';
import { AEMETWeatherService } from '../../../../src/Fungus/Predictions/Infrastructure/WeatherStations/AEMETWeatherService';
import { WeatherService } from '../../../../src/Fungus/Predictions/Domain/WeatherStations/WeatherService';

import CoordinateMother from '../../Shared/Domain/CoordinateMother';

export default class WeatherStationMother {
  static create({
    id = WeatherStationId.create(),
    externalId = faker.random.word(),
    location = CoordinateMother.random(),
    description = faker.random.words(),
    // To-Do mock this service
    gauges = new AEMETWeatherService(),
  }: {
    id?: WeatherStationId;
    externalId?: string;
    location?: Coordinate;
    description?: string;
    gauges?: WeatherService;
  } = {}): WeatherStation {
    return new WeatherStation({ id, externalId, location, description, gauges });
  }

  static random(): WeatherStation {
    return this.create();
  }
}
