import { MushroomId } from '../../Shared/Domain/MushroomId';

import { MushroomRepository } from '../Domain/MushroomRepository';
import { Mushroom } from '../Domain/Mushroom';
import { Mushrooms } from '../Domain/Mushrooms';

export class InMemoryMushroomRepository implements MushroomRepository {
  private _mushrooms: Mushrooms;

  constructor({ mushrooms = new Mushrooms() }: { mushrooms?: Mushrooms } = {}) {
    this._mushrooms = mushrooms;
  }

  add(mushroom: Mushroom): void {
    this._mushrooms.add(mushroom);
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this._mushrooms.findById(id);
  }

  findByScientificName(scientificName: string): Mushroom | undefined {
    return this._mushrooms.findByScientificName(scientificName);
  }

  all(): Mushrooms {
    return this._mushrooms;
  }

  clean(): void {
    this._mushrooms = new Mushrooms();
  }
}
