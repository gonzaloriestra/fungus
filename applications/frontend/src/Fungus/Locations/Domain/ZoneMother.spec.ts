import { Coordinate } from '../../Shared/Domain/Coordinate';

import { Zone } from './Zone';

export default class ZoneMother {
  static create({ coordinates = [] }: { coordinates?: Array<Coordinate> } = {}): Zone {
    return new Zone({ coordinates });
  }

  static random(): Zone {
    return this.create();
  }
}
