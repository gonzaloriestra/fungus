import { LocationId } from '../../Shared/Domain/Locations/LocationId';

import { Zone, Primitives as ZonePrimitives } from './Zone';
import { WeatherStationId } from './WeatherStations/WeatherStationId';

export type Primitives = { id: string; name: string; zone: ZonePrimitives; weatherStationId?: string };

export class Location {
  _id: LocationId;
  _name: string;
  _zone: Zone;
  _weatherStationId?: WeatherStationId;

  constructor({
    id,
    name,
    zone,
    weatherStationId,
  }: {
    id: LocationId;
    name: string;
    zone: Zone;
    weatherStationId?: WeatherStationId;
  }) {
    this._id = id;
    this._name = name;
    this._zone = zone;
    this._weatherStationId = weatherStationId;
  }

  id(): LocationId {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  zone(): Zone {
    return this._zone;
  }

  weatherStationId(): WeatherStationId | undefined {
    return this._weatherStationId;
  }

  equalTo(location: Location): boolean {
    return this.id().equalTo(location.id());
  }

  idEqualTo(id: LocationId): boolean {
    return this._id.equalTo(id);
  }

  toPrimitives(): Primitives {
    return {
      id: this._id.value(),
      name: this._name,
      zone: this._zone.toPrimitives(),
      weatherStationId: this._weatherStationId?.value(),
    };
  }

  static fromPrimitives({ id, name, zone, weatherStationId }: Primitives): Location {
    return new Location({
      id: new LocationId(id),
      name,
      zone: Zone.fromPrimitives(zone),
      weatherStationId: weatherStationId ? new WeatherStationId(weatherStationId) : undefined,
    });
  }
}
