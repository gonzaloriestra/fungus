import { MushroomRepository } from '../../Domain/MushroomRepository';

export default class MushroomsCleaner {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  invoke(): void {
    this.repository.clean();
  }
}
