import { MushroomRepository } from '../../Domain/MushroomRepository';
import { Mushroom } from '../../Domain/Mushroom';

import { MushroomsResponse } from './MushroomsResponse';
import { MushroomResponse } from './MushroomResponse';

export default class MushroomsFinder {
  repository: MushroomRepository;

  constructor(repository: MushroomRepository) {
    this.repository = repository;
  }

  run(): MushroomsResponse {
    // To-Do collection of mushrooms
    return new MushroomsResponse(this.repository.all().map(this.toResponse()));
  }

  toResponse() {
    return (mushroom: Mushroom): MushroomResponse => new MushroomResponse(mushroom.toPrimitives());
  }
}
