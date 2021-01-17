import { LocationId } from '../../Shared/Domain/LocationId';
import { WeatherStationId } from '../../Shared/Domain/WeatherStationId';
import { AggregateRoot } from '../../Shared/Domain/AggregateRoot';
import { UserId } from '../../Shared/Domain/UserId';

import { Zone, Primitives as ZonePrimitives } from './Zone';

export type Primitives = { id: string; name: string; zone: ZonePrimitives; weatherStationId?: string; userId: string };

export class Location extends AggregateRoot {
  private readonly _id: LocationId;
  private readonly _name: string;
  private readonly _zone: Zone;
  private readonly _weatherStationId?: WeatherStationId;
  private readonly _userId: UserId;

  constructor({
    id,
    name,
    zone,
    weatherStationId,
    userId,
  }: {
    id: LocationId;
    name: string;
    zone: Zone;
    weatherStationId?: WeatherStationId;
    userId: UserId;
  }) {
    super();

    this._id = id;
    this._name = name;
    this._zone = zone;
    this._weatherStationId = weatherStationId;
    this._userId = userId;
  }

  id(): LocationId {
    return this._id;
  }

  userId(): UserId {
    return this._userId;
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
      userId: this._userId.value(),
    };
  }

  static fromPrimitives({ id, name, zone, weatherStationId, userId }: Primitives): Location {
    return new Location({
      id: new LocationId(id),
      name,
      zone: Zone.fromPrimitives(zone),
      weatherStationId: weatherStationId ? new WeatherStationId(weatherStationId) : undefined,
      userId: new UserId(userId),
    });
  }
}
