import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

import { Mushroom, Primitives as MushroomPrimitives } from './Mushroom';

export type Primitives = Array<MushroomPrimitives>;

export class Mushrooms {
  private readonly _mushrooms: Array<Mushroom>;

  constructor({ mushrooms = [] }: { mushrooms?: Array<Mushroom> } = {}) {
    this._mushrooms = mushrooms;
  }

  add(mushroom: Mushroom): void {
    this._mushrooms.push(mushroom);
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this._mushrooms.find((mushroom) => mushroom.id().equalTo(id));
  }

  findByScientificName(scientificName: string): Mushroom | undefined {
    return this._mushrooms.find((mushroom) => mushroom.scientificName() === scientificName);
  }

  toPrimitives(): Primitives {
    return this._mushrooms.map((mushroom) => mushroom.toPrimitives());
  }
}
