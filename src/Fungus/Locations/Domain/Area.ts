import { Coordinate } from './Coordinate';

export class Area {
  _coordinates: Array<Coordinate>;

  constructor({ coordinates }: { coordinates: Array<Coordinate> }) {
    this._coordinates = coordinates || [];
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  toPrimitives(): Array<{ latitude: number; longitude: number }> {
    return this._coordinates.map((coordinate) => ({
      latitude: coordinate.latitude(),
      longitude: coordinate.longitude(),
    }));
  }

  static fromPrimitives({ coordinates }: { coordinates: Array<any> }): Area {
    // To-Do add fromPrimitives to coordinate object
    return new Area({
      coordinates: coordinates.map(
        (coordinate) => new Coordinate({ latitude: coordinate.latitude, longitude: coordinate.longitude }),
      ),
    });
  }
}
