import { MushroomRepository } from '../../Domain/MushroomRepository';

import { FindMushroomsResponse } from './FindMushroomsResponse';

export default class MushroomsFinder {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  run(): FindMushroomsResponse {
    return new FindMushroomsResponse(this.repository.all().toPrimitives());
  }
}
