import faker from 'faker';

import { Coordinate } from './Coordinate';

export default class CoordinateMother {
  static create({
    latitude = faker.random.number(),
    longitude = faker.random.number(),
  }: { latitude?: number; longitude?: number } = {}): Coordinate {
    return new Coordinate({ latitude, longitude });
  }

  static random(): Coordinate {
    return this.create();
  }
}
