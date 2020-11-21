import { LocationRepository } from '../../Domain/LocationRepository';

export default class LocationCleaner {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  run(): void {
    this.repository.clean();
  }
}
