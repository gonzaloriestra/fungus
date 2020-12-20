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

  distanceTo(coordinate: Coordinate): number {
    const latitudeDiff = this.latitude() - coordinate.latitude();
    const longitudeDiff = this.longitude() - coordinate.longitude();

    return Math.sqrt(latitudeDiff * latitudeDiff + longitudeDiff * longitudeDiff);
  }

  toPrimitives(): Primitives {
    return {
      latitude: this.latitude(),
      longitude: this.longitude(),
    };
  }
}
