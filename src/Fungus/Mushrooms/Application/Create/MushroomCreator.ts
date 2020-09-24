import { Mushroom } from '../../Domain/Mushroom';
import { MushroomWithSameScientificNameAlreadyExist } from '../../Domain/MushroomWithSameScientificNameAlreadyExist';
import { MushroomRepository } from '../../Domain/MushroomRepository';

import { CreateMushroomRequest } from './CreateMushroomRequest';

export default class MushroomCreator {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  invoke({ id, scientificName }: CreateMushroomRequest): void {
    this.ensureMushroomWithSameScientificNameDoesNotExist(scientificName);

    const mushroom = new Mushroom({ id, scientificName });

    this.repository.add(mushroom);
  }

  ensureMushroomWithSameScientificNameDoesNotExist(scientificName: string): void {
    const existentMushroom = this.repository.filterBy({ scientificName });

    if (0 !== existentMushroom.length) {
      throw new MushroomWithSameScientificNameAlreadyExist(scientificName);
    }
  }
}
