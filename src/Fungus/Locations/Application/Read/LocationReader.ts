import { LocationRepository } from '../../Domain/LocationRepository';

import { LocationReaderResponse } from './LocationReaderResponse';

export default class LocationReader {
  repository: LocationRepository;

  constructor(repository: LocationRepository) {
    this.repository = repository;
  }

  invoke(): LocationReaderResponse {
    return this.repository.all();
  }
}
