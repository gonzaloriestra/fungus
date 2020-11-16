import { LocationId } from '../../Shared/Domain/LocationId';

import { Area } from './Area';

type Primitives = { id: string; name: string; area: any };

export class Location {
  _id: LocationId;
  _name: string;
  _area: Area;
  // To-Do get a better name from area or event use directly Array<Coordinates>
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

  equalTo(location: Location): boolean {
    return this.id().equalTo(location.id());
  }

  idEqualTo(id: LocationId): boolean {
    return this._id.equalTo(id);
  }

  toPrimitives(): Primitives {
    return {
      id: this._id.value(),
      name: this._name,
      area: this._area.toPrimitives(),
    };
  }

  static fromPrimitives({ id, name, area }: Primitives): Location {
    return new Location({
      id: new LocationId(id),
      name,
      area: Area.fromPrimitives(area),
    });
  }
}
