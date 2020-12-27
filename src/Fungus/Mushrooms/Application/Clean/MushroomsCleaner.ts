import { MushroomRepository } from '../../Domain/MushroomRepository';

export default class MushroomsCleaner {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  // To-Do rename to run
  invoke(): void {
    this.repository.clean();
  }
}
