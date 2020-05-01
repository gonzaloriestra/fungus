import { Mushroom } from '../../Domain/Mushroom';
import { MushroomAlreadyExist } from '../../Domain/MushroomAlreadyExist';
import { MushroomRepository } from '../../Domain/MushroomRepository';

import { MushroomCreatorRequest } from './MushroomCreatorRequest';

export default class MushroomCreator {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  invoke({ id, scientificName }: MushroomCreatorRequest): void {
    this.ensureMushroomDoesNotExist(scientificName);

    const mushroom = new Mushroom({ id, scientificName });

    this.repository.add(mushroom);
  }

  ensureMushroomDoesNotExist(scientificName: string): void {
    const existentMushroom = this.repository.filterBy({ scientificName });

    if (existentMushroom.length !== 0) {
      throw MushroomAlreadyExist(scientificName);
    }
  }
}
