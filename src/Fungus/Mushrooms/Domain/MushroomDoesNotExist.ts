import { MushroomId } from './MushroomId';

export class MushroomDoesNotExist extends Error {
  constructor(id: MushroomId) {
    super(`Mushroom with id: ${id.value()} does not exist`);
  }
}
