import faker from 'faker';

import { MushroomId } from '../../../../src/Fungus/Shared/Domain/MushroomId';

import { Mushroom } from '../../../../src/Fungus/Mushrooms/Domain/Mushroom';

export default class MushroomMother {
  static create({ id, scientificName }: { id: MushroomId; scientificName: string }): Mushroom {
    return new Mushroom({ id, scientificName });
  }

  static random(): Mushroom {
    return this.create({
      id: MushroomId.create(),
      scientificName: faker.random.words(),
    });
  }
}
