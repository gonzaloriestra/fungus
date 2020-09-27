import { LocationId } from './LocationId';
import { Coordinate } from './Coordinate';

export class Location {
  _id: LocationId;
  _name: string;
  _coordinates: Array<Coordinate>;

  constructor({ id, name, coordinates }: { id: LocationId; name?: string; coordinates?: Array<Coordinate> }) {
    this._id = id;
    this._name = name || '';
    this._coordinates = coordinates || [];
  }

  id(): LocationId {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  coordinates(): Array<Coordinate> {
    return this._coordinates;
  }

  equalTo(aLocation: Location): boolean {
    return this.id().equalTo(aLocation.id());
  }

  toPrimitives(): {
    id: string;
    name: string;
    coordinates: Array<{ latitude: number; longitude: number }>;
  } {
    return {
      id: this._id.value(),
      name: this._name,
      coordinates: this._coordinates.map((coordinate) => ({
        latitude: coordinate.latitude(),
        longitude: coordinate.longitude(),
      })),
    };
  }
}
