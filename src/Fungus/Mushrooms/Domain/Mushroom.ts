import { MushroomId } from './MushroomId';

export class Mushroom {
  _id: MushroomId;
  _scientificName: string;

  constructor({ id, scientificName }: { id: MushroomId; scientificName: string }) {
    this._id = id;
    this._scientificName = scientificName;
  }

  id(): MushroomId {
    return this._id;
  }

  scientificName(): string {
    return this._scientificName;
  }

  toPrimitives(): {
    id: string;
    scientificName: string;
  } {
    return {
      id: this._id.value(),
      scientificName: this._scientificName,
    };
  }
}
