import faker from 'faker';

import { MushroomId } from '../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';

import { Mushroom } from '../../../../src/Fungus/Mushrooms/Domain/Mushroom';

export class MushroomMother {
  static create({
    id = MushroomId.create(),
    scientificName = faker.random.words(),
  }: { id?: MushroomId; scientificName?: string } = {}): Mushroom {
    return new Mushroom({ id, scientificName });
  }

  static random(): Mushroom {
    return this.create();
  }
}
