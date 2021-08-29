import faker from 'faker';

import { UserId } from '../../Shared/Domain/UserId';
import { LocationId } from '../../Shared/Domain/LocationId';
import { WeatherStationId } from '../../Shared/Domain/WeatherStationId';

import { Zone } from './Zone';
import { Location } from './Location';

import ZoneMother from './ZoneMother';

export default class LocationMother {
  static create({
    id = LocationId.create(),
    name = faker.random.word(),
    zone = ZoneMother.random(),
    weatherStationId = WeatherStationId.create(),
    userId = UserId.create(),
  }: {
    id?: LocationId;
    name?: string;
    zone?: Zone;
    weatherStationId?: WeatherStationId;
    userId?: UserId;
  } = {}): Location {
    return new Location({ id, name, zone, weatherStationId, userId });
  }

  static random(): Location {
    return this.create();
  }
}
