import { HarvestRepository } from '../../Domain/HarvestRepository';

export default class HarvestCleaner {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  run(): void {
    this.repository.clean();
  }
}
