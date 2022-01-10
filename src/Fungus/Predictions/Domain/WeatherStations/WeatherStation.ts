import { Coordinate } from '../../../Shared/Domain/Coordinate';
import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';
import { WeatherService } from './WeatherService';

export class WeatherStation {
  private readonly _id: WeatherStationId;
  private readonly _externalId: string;
  private readonly _location: Coordinate;
  private readonly _description: string;
  private readonly _gauges: WeatherService;

  constructor({
    id,
    externalId,
    location,
    description,
    gauges,
  }: {
    id: WeatherStationId;
    externalId: string;
    location: Coordinate;
    description: string;
    gauges: WeatherService;
  }) {
    this._id = id;
    this._externalId = externalId;
    this._location = location;
    this._description = description;
    this._gauges = gauges;
  }

  weatherStationId(): WeatherStationId {
    return this._id;
  }

  location(): Coordinate {
    return this._location;
  }

  distanceTo(coordinate: Coordinate): number {
    return this._location.distanceTo(coordinate);
  }

  precipitation({ from, to }: { from: Date; to: Date }): Promise<number> {
    return this._gauges.precipitation({ from, to, id: this._externalId });
  }
}
