import { LocationId } from './LocationId';
import { Area } from './Area';
import { Coordinate } from './Coordinate';

export class Location {
  _id: LocationId;
  _name: string;
  _area: Area;

  constructor({ id, name, area }: { id: LocationId; name: string; area: Area }) {
    this._id = id;
    this._name = name;
    this._area = area;
  }

  id(): LocationId {
    return this._id;
  }

  name(): string {
    return this._name;
  }

  area(): Area {
    return this._area;
  }

  equalTo(aLocation: Location): boolean {
    return this.id().equalTo(aLocation.id());
  }

  toPrimitives(): {
    id: string;
    name: string;
    area: Array<{ latitude: number; longitude: number }>;
  } {
    return {
      id: this._id.value(),
      name: this._name,
      area: this._area.toPrimitives(),
    };
  }

  static fromPrimitives({
    id,
    name,
    area,
  }: {
    id: string;
    name: string;
    area: Array<{ latitude: number; longitude: number }>;
  }): Location {
    return new Location({
      id: new LocationId(id),
      name,
      area: new Area({
        coordinates: area.map(
          (coordinate) => new Coordinate({ latitude: coordinate.latitude, longitude: coordinate.longitude }),
        ),
      }),
    });
  }
}
