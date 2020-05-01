export function MushroomWithSameScientificNameAlreadyExist(scientificName: string): Error {
  return new Error(`Mushroom with name: ${scientificName} already exist`);
}

MushroomWithSameScientificNameAlreadyExist.prototype = Object.create(Error.prototype);
