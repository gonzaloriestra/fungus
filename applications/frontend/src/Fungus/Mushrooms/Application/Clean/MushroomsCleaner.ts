import { MushroomRepository } from '../../Domain/MushroomRepository';

export class MushroomsCleaner {
  private readonly _repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this._repository = repository;
  }

  run(): void {
    this._repository.clean();
  }
}
