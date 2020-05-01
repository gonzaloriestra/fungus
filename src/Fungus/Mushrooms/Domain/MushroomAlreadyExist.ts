export function MushroomAlreadyExist(scientificName: string): Error {
  return new Error(`Mushroom with scientific name: ${scientificName} already exist`);
}

MushroomAlreadyExist.prototype = Object.create(Error.prototype);
