import { LocationId } from './LocationId';
import { Coordinate } from './Coordinate';

export class Location {
  _id: LocationId;
  _name: string;
  _coordinates: Array<Coordinate>;

  constructor({ id, name, coordinates }: { id: LocationId; name: string; coordinates: Array<Coordinate> }) {
    this._id = id;
    this._name = name;
    this._coordinates = coordinates;
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
}
