import { Coordinate } from '../../../Locations/Domain/Coordinate';
import { WeatherStationId } from '../../../Shared/Domain/Predictions/WeatherStations/WeatherStationId';
import { WeatherService } from './WeatherService';

export class WeatherStation {
  private readonly _id: WeatherStationId;
  private readonly _externalId: string;
  private readonly _location: Coordinate;
  private readonly _description: string;

  constructor({
    id,
    externalId,
    location,
    description,
  }: {
    id: WeatherStationId;
    externalId: string;
    location: Coordinate;
    description: string;
  }) {
    this._id = id;
    this._externalId = externalId;
    this._location = location;
    this._description = description;
  }

  weatherStationId(): WeatherStationId {
    return this._id;
  }

  externalId(): string {
    return this._externalId;
  }

  location(): Coordinate {
    return this._location;
  }

  description(): string {
    return this._description;
  }

  distanceTo(coordinate: Coordinate): number {
    return this._location.distanceTo(coordinate);
  }

  precipitation({
    from,
    to,
    weatherService,
  }: {
    from: Date;
    to: Date;
    weatherService: WeatherService;
  }): Promise<number> {
    return weatherService.precipitation({ from, to, id: this._externalId });
  }
}
