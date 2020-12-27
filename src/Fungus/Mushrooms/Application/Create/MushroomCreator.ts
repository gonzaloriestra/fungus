import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

import { Mushroom } from '../../Domain/Mushroom';
import { MushroomWithSameScientificNameAlreadyExist } from '../../Domain/MushroomWithSameScientificNameAlreadyExist';
import { MushroomRepository } from '../../Domain/MushroomRepository';

import { CreateMushroomRequest } from './CreateMushroomRequest';
import { MushroomAlreadyExist } from '../../Domain/MushroomAlreadyExist';

export default class MushroomCreator {
  private readonly _repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this._repository = repository;
  }

  run({ id, scientificName }: CreateMushroomRequest): void {
    this.ensureMushroomDoesNotExist(id);
    this.ensureMushroomWithSameScientificNameDoesNotExist(scientificName);

    const mushroom = new Mushroom({ id, scientificName });

    this._repository.add(mushroom);
  }

  private ensureMushroomWithSameScientificNameDoesNotExist(scientificName: string): void {
    const existentMushroom = this._repository.findByScientificName(scientificName);

    if (existentMushroom) {
      throw new MushroomWithSameScientificNameAlreadyExist(scientificName);
    }
  }

  private ensureMushroomDoesNotExist(id: MushroomId): void {
    const existentMushroom = this._repository.findById(id);

    if (existentMushroom) {
      throw new MushroomAlreadyExist(id);
    }
  }
}
