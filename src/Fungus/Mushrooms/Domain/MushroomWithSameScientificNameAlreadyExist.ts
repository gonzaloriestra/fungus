export class MushroomWithSameScientificNameAlreadyExist extends Error {
  constructor(scientificName: string) {
    super(`Mushroom with name: ${scientificName} already exist`);
  }
}
