import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { Mushroom } from '../../Domain/Mushroom';
import { MushroomWithSameScientificNameAlreadyExist } from '../../Domain/MushroomWithSameScientificNameAlreadyExist';
import { MushroomRepository } from '../../Domain/MushroomRepository';

import { CreateMushroomRequest } from './CreateMushroomRequest';
import { MushroomAlreadyExist } from '../../Domain/MushroomAlreadyExist';

export default class MushroomCreator {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  run({ id, scientificName }: CreateMushroomRequest): void {
    this.ensureMushroomDoesNotExist(id);
    this.ensureMushroomWithSameScientificNameDoesNotExist(scientificName);

    const mushroom = new Mushroom({ id, scientificName });

    this.repository.add(mushroom);
  }

  private ensureMushroomWithSameScientificNameDoesNotExist(scientificName: string): void {
    const existentMushroom = this.repository.findByScientificName(scientificName);

    if (existentMushroom) {
      throw new MushroomWithSameScientificNameAlreadyExist(scientificName);
    }
  }

  private ensureMushroomDoesNotExist(id: MushroomId): void {
    const existentMushroom = this.repository.findById(id);

    if (existentMushroom) {
      throw new MushroomAlreadyExist(id);
    }
  }
}
