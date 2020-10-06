import { MushroomRepository } from '../../Domain/MushroomRepository';
import { Mushroom } from '../../Domain/Mushroom';

import { MushroomsResponse } from './MushroomsResponse';
import { MushroomResponse } from './MushroomResponse';

export default class MushroomsSearcher {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  run(): MushroomsResponse {
    return new MushroomsResponse(this.repository.searchAll().map(this.toResponse()));
  }

  toResponse() {
    return (mushroom: Mushroom): MushroomResponse => new MushroomResponse(mushroom.toPrimitives());
  }
}
