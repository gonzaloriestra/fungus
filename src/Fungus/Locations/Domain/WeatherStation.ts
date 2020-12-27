import { WeatherStationId } from './WeatherStationId';
import { Coordinate } from './Coordinate';

export class WeatherStation {
  _weatherStationId: WeatherStationId;
  _externalId: string;
  _location: Coordinate;
  _description: string;

  constructor({
    // To-Do Rename to id
    weatherStationId,
    externalId,
    location,
    description,
  }: {
    weatherStationId: WeatherStationId;
    externalId: string;
    location: Coordinate;
    description: string;
  }) {
    this._weatherStationId = weatherStationId;
    this._externalId = externalId;
    this._location = location;
    this._description = description;
  }

  weatherStationId(): WeatherStationId {
    return this._weatherStationId;
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
}
