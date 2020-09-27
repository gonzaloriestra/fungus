import { LocationId } from './LocationId';
import { Area } from './Area';

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
}
