import faker from 'faker';

import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';
import { Location } from '../../../../src/Fungus/Locations/Domain/Location';

import ZoneMother from '../../Locations/Domain/ZoneMother';
import { WeatherStationId } from '../../../../src/Fungus/Shared/Domain/WeatherStationId';

export default class LocationMother {
  static create({
    id = LocationId.create(),
    name = faker.random.word(),
    zone = ZoneMother.random(),
    weatherStationId = WeatherStationId.create(),
  }: { id?: LocationId; name?: string; zone?: Zone; weatherStationId?: WeatherStationId } = {}): Location {
    return new Location({ id, name, zone, weatherStationId });
  }

  static random(): Location {
    return this.create();
  }
}
