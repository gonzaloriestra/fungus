import { MushroomId } from '../../Shared/Domain/MushroomId';

export type Primitives = { id: string; scientificName: string };

export class Mushroom {
  private readonly _id: MushroomId;
  private readonly _scientificName: string;

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

  toPrimitives(): Primitives {
    return {
      id: this._id.value(),
      scientificName: this._scientificName,
    };
  }
}
