import faker from 'faker';

import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';
import { UserId } from '../../../../src/Fungus/Shared/Domain/UserId';

import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

import ZoneMother from './ZoneMother';
import { WeatherStationId } from '../../../../src/Fungus/Shared/Domain/WeatherStationId';

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
