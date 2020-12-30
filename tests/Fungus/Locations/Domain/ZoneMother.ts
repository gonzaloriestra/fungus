import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';
import { Coordinate } from '../../../../src/Fungus/Shared/Domain/Coordinate';

export default class ZoneMother {
  static create({ coordinates = [] }: { coordinates?: Array<Coordinate> } = {}): Zone {
    return new Zone({ coordinates });
  }

  static random(): Zone {
    return this.create();
  }
}
