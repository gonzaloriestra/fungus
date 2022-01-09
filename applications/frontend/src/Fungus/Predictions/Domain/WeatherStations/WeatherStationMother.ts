import faker from 'faker';

import { Coordinate } from '../../../Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';
import CoordinateMother from '../../../Shared/Domain/CoordinateMother';

import { AEMETWeatherService } from '../../Infrastructure/WeatherStations/AEMETWeatherService';

import { WeatherStation } from './WeatherStation';
import { WeatherService } from './WeatherService';

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
