export class MushroomWithSameScientificNameAlreadyExist extends Error {
  constructor(scientificName: string) {
    super(`Mushroom with scientific name: ${scientificName} already exist`);
  }
}
