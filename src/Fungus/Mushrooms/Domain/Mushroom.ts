import { MushroomId } from '../../Shared/Domain/MushroomId';
import { AggregateRoot } from '../../Shared/Domain/AggregateRoot';

export type Primitives = { id: string; scientificName: string };

export class Mushroom extends AggregateRoot {
  private readonly _id: MushroomId;
  private readonly _scientificName: string;

  constructor({ id, scientificName }: { id: MushroomId; scientificName: string }) {
    super();

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

  static fromPrimitives({ id, scientificName }: Primitives): Mushroom {
    return new Mushroom({ id: new MushroomId(id), scientificName });
  }
}
