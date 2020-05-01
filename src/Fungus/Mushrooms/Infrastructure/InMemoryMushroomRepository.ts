import { MushroomRepository } from '../Domain/MushroomRepository';
import { MushroomId } from '../Domain/MushroomId';
import { Mushroom } from '../Domain/Mushroom';

export class InMemoryMushroomRepository implements MushroomRepository {
  mushrooms: Array<Mushroom>;

  constructor({ mushrooms = [] }: { mushrooms?: Array<Mushroom> } = {}) {
    this.mushrooms = mushrooms;
  }

  nextIdentity(): MushroomId {
    return MushroomId.create();
  }

  add(harvest: Mushroom): void {
    this.mushrooms.push(harvest);
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this.mushrooms.find((mushroom) => mushroom.id() === id);
  }

  filterBy({ scientificName }: { scientificName?: string } = {}): Array<Mushroom> {
    if (scientificName) {
      return this._filterByScientificName(scientificName);
    }
    return this.mushrooms;
  }

  _filterByScientificName(scientificName: string): Array<Mushroom> {
    return this.mushrooms.filter((mushroom) => mushroom.scientificName() === scientificName);
  }
}
