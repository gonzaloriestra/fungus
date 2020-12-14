export class LocationView {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _weatherStationId?: string;

  constructor({ id, name, weatherStationId }: { id: string; name: string; weatherStationId?: string }) {
    this._id = id;
    this._name = name;
    this._weatherStationId = weatherStationId;
  }

  id(): string {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  weatherStationId(): string | undefined {
    return this._weatherStationId;
  }
}
