import faker from 'faker';

import { MushroomView } from '../../../../../src/Fungus/Shared/Application/Mushrooms/MushroomView';

export default class MushroomViewMother {
  static create({
    id = faker.random.uuid(),
    scientificName = faker.random.word(),
  }: {
    id?: string;
    scientificName?: string;
  } = {}): MushroomView {
    return new MushroomView({ id, scientificName });
  }

  static random(): MushroomView {
    return this.create();
  }
}
