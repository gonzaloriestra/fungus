import { MushroomId } from './MushroomId';

export function MushroomAlreadyExist(id: MushroomId): Error {
  return new Error(`Mushroom with id: ${id.value()} already exist`);
}

MushroomAlreadyExist.prototype = Object.create(Error.prototype);
