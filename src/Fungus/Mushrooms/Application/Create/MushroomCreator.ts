import { Mushroom } from '../../Domain/Mushroom';
import { MushroomRepository } from '../../Domain/MushroomRepository';

import { MushroomCreatorRequest } from './MushroomCreatorRequest';
import { MushroomWithSameScientificNameAlreadyExist } from '../../Domain/MushroomWithSameScientificNameAlreadyExist';

export default class MushroomCreator {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  invoke({ id, scientificName }: MushroomCreatorRequest): void {
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
