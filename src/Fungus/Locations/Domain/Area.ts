import { Coordinate } from './Coordinate';

type Primitives = Array<{ latitude: number; longitude: number }>;

// To-Do Consider to use Array<Coordinate> directly as we do in other cases. Area right now it just a collection of
export class Area {
  _coordinates: Array<Coordinate>;

  constructor({ coordinates }: { coordinates: Array<Coordinate> }) {
    this._coordinates = coordinates || [];
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  toPrimitives(): Primitives {
    return this._coordinates.map((coordinate) => ({
      latitude: coordinate.latitude(),
      longitude: coordinate.longitude(),
    }));
  }

  static fromPrimitives(primitives: Primitives): Area {
    // To-Do add fromPrimitives to coordinate object
    return new Area({
      coordinates: primitives.map(
        (coordinate) => new Coordinate({ latitude: coordinate.latitude, longitude: coordinate.longitude }),
      ),
    });
  }
}
