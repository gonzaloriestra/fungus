type Primitives = { latitude: number; longitude: number };

export class Coordinate {
  _latitude: number;
  _longitude: number;

  constructor({ latitude, longitude }: Primitives) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  latitude(): number {
    return this._latitude;
  }

  longitude(): number {
    return this._longitude;
  }

  toPrimitives(): Primitives {
    return {
      latitude: this.latitude(),
      longitude: this.longitude(),
    };
  }
}
