import { Coordinate } from './Coordinate';

export type Primitives = Array<{ latitude: number; longitude: number }>;

export class Zone {
  _coordinates: Array<Coordinate>;

  constructor({ coordinates }: { coordinates: Array<Coordinate> }) {
    this._coordinates = coordinates || [];
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  midpoint(): Coordinate {
    // To-Do it does not working as expected
    return this._coordinates.reduce((midpoint, coordinate) => {
      return midpoint
        ? new Coordinate({
            latitude: (coordinate.latitude() + midpoint.latitude()) / 2,
            longitude: (coordinate.longitude() + midpoint.longitude()) / 2,
          })
        : coordinate;
    });
  }

  toPrimitives(): Primitives {
    return this._coordinates.map((coordinate) => ({
      latitude: coordinate.latitude(),
      longitude: coordinate.longitude(),
    }));
  }

  static fromPrimitives(primitives: Primitives): Zone {
    return new Zone({
      coordinates: primitives.map(
        (coordinate) => new Coordinate({ latitude: coordinate.latitude, longitude: coordinate.longitude }),
      ),
    });
  }
}
