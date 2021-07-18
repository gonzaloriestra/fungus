import { LocationRepository } from '../../Domain/LocationRepository';

export class LocationCleaner {
  private readonly _repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this._repository = repository;
  }

  run(): void {
    this._repository.clean();
  }
}
