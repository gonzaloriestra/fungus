import { MushroomId } from '../../Shared/Domain/Mushrooms/MushroomId';

export class MushroomAlreadyExist extends Error {
  constructor(id: MushroomId) {
    super(`Mushroom with id: ${id.value()} already exists`);
  }
}
