import { MushroomId } from '../../Shared/Domain/MushroomId';

import { MushroomRepository } from '../Domain/MushroomRepository';
import { Mushroom } from '../Domain/Mushroom';
import { Mushrooms } from '../Domain/Mushrooms';

// To-Do this is temporal, so we should remove it
const initialMushrooms = [
  new Mushroom({ id: new MushroomId('9f201a5a-4cbb-427c-935d-0a52b0bf4742'), scientificName: 'Boletus Edulis' }),
  new Mushroom({ id: new MushroomId('0ce9affe-79b3-473c-9c0d-31976d04e149'), scientificName: 'Amanita Caesarea' }),
  new Mushroom({ id: new MushroomId('a8c15ce6-2310-4572-a3f7-b13a8900d483'), scientificName: 'Boletus Aereus' }),
  new Mushroom({ id: new MushroomId('84270069-10a2-4c52-80be-9dd8a70f47a3'), scientificName: 'Amanita Muscaria' }),
];

export class InMemoryMushroomRepository implements MushroomRepository {
  private mushrooms: Mushrooms;

  constructor({ mushrooms = new Mushrooms({ mushrooms: initialMushrooms }) }: { mushrooms?: Mushrooms } = {}) {
    this.mushrooms = mushrooms;
  }

  add(mushroom: Mushroom): void {
    this.mushrooms.add(mushroom);
  }

  findById(id: MushroomId): Mushroom | undefined {
    return this.mushrooms.findById(id);
  }

  findByScientificName(scientificName: string): Mushroom | undefined {
    return this.mushrooms.findByScientificName(scientificName);
  }

  all(): Mushrooms {
    return this.mushrooms;
  }

  clean(): void {
    this.mushrooms = new Mushrooms();
  }
}
