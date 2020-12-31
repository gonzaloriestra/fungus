import { Coordinate, Primitives as CoordinatePrimitives } from '../../Shared/Domain/Coordinate';

export type Primitives = { coordinates: Array<CoordinatePrimitives> };

export class Zone {
  private readonly _coordinates: Array<Coordinate>;

  constructor({ coordinates }: { coordinates: Array<Coordinate> }) {
    this._coordinates = coordinates || [];
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  midpoint(): Coordinate {
    const calculateAverage = (coordinates: Array<number>): number =>
      coordinates.reduce((average, currentCoordinate) => average + currentCoordinate, 0) / coordinates.length;

    const midpointLatitude = calculateAverage(this._coordinates.map((coordinate) => coordinate.latitude()));
    const midpointLongitude = calculateAverage(this._coordinates.map((coordinate) => coordinate.longitude()));

    return new Coordinate({ latitude: midpointLatitude, longitude: midpointLongitude });
  }

  toPrimitives(): Primitives {
    return {
      coordinates: this._coordinates.map((coordinate) => ({
        latitude: coordinate.latitude(),
        longitude: coordinate.longitude(),
      })),
    };
  }

  static fromPrimitives(primitives: Primitives): Zone {
    return new Zone({
      coordinates: primitives.coordinates.map(
        (coordinate) => new Coordinate({ latitude: coordinate.latitude, longitude: coordinate.longitude }),
      ),
    });
  }
}
