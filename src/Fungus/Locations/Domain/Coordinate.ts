export class Coordinate {
  _latitude: number;
  _longitude: number;

  constructor({ latitude, longitude }: { latitude: number; longitude: number }) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  latitude(): number {
    return this._latitude;
  }

  longitude(): number {
    return this._longitude;
  }
}
