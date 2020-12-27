import { MushroomRepository } from '../../Domain/MushroomRepository';

import { FindMushroomsResponse } from './FindMushroomsResponse';

export class MushroomsFinder {
  private readonly _repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this._repository = repository;
  }

  run(): FindMushroomsResponse {
    return new FindMushroomsResponse(this._repository.all().toPrimitives());
  }
}
