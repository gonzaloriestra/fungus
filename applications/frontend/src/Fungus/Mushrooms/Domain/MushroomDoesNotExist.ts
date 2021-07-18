import { MushroomId } from '../../Shared/Domain/MushroomId';

export class MushroomDoesNotExist extends Error {
  constructor(id: MushroomId) {
    super(`Mushroom with id: ${id.value()} does not exist`);
  }
}
