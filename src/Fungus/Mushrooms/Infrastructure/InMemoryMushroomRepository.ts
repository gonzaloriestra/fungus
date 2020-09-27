import { MushroomRepository } from '../Domain/MushroomRepository';
import { MushroomId } from '../Domain/MushroomId';
import { Mushroom } from '../Domain/Mushroom';

const initialMushrooms = [
  new Mushroom({ id: new MushroomId('9f201a5a-4cbb-427c-935d-0a52b0bf4742'), scientificName: 'Boletus Edulis' }),
  new Mushroom({ id: new MushroomId('0ce9affe-79b3-473c-9c0d-31976d04e149'), scientificName: 'Amanita Caesarea' }),
  new Mushroom({ id: new MushroomId('a8c15ce6-2310-4572-a3f7-b13a8900d483'), scientificName: 'Boletus Aereus' }),
  new Mushroom({ id: new MushroomId('84270069-10a2-4c52-80be-9dd8a70f47a3'), scientificName: 'Amanita Muscaria' }),
];

export class InMemoryMushroomRepository implements MushroomRepository {
  mushrooms: Array<Mushroom>;

  constructor({ mushrooms = initialMushrooms }: { mushrooms?: Array<Mushroom> } = {}) {
    this.mushrooms = mushrooms;
  }

  add(mushroom: Mushroom): void {
    this.mushrooms.push(mushroom);
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this.mushrooms.find((mushroom) => mushroom.id().equalTo(id));
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
