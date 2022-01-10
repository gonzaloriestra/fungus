import { WeatherStationId } from '../../Shared/Domain/WeatherStationId';

export class LocationView {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _weatherStationId?: WeatherStationId;

  constructor({ id, name, weatherStationId }: { id: string; name: string; weatherStationId?: string }) {
    this._id = id;
    this._name = name;
    if (weatherStationId) {
      this._weatherStationId = new WeatherStationId(weatherStationId);
    }
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  weatherStationId(): WeatherStationId | undefined {
    return this._weatherStationId;
  }
}
