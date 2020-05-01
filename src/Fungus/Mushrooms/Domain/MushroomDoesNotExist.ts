import { MushroomId } from './MushroomId';

export function MushroomDoesNotExist(id: MushroomId): Error {
  return new Error(`Mushroom with id: ${id.value()} does not exist`);
}

MushroomDoesNotExist.prototype = Object.create(Error.prototype);
