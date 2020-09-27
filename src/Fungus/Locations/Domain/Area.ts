import { Coordinate } from './Coordinate';

export class Area {
  _coordinates: Array<Coordinate>;

  constructor({ coordinates }: { coordinates: Array<Coordinate> }) {
    this._coordinates = coordinates || [];
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  toPrimitives(): object {
    return this._coordinates.map((coordinate) => ({
      latitude: coordinate.latitude(),
      longitude: coordinate.longitude(),
    }));
  }
}
