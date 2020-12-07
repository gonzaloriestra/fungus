import { Area } from '../../../../src/Fungus/Locations/Domain/Area';
import { Coordinate } from '../../../../src/Fungus/Locations/Domain/Coordinate';

export default class AreaMother {
  static create({ coordinates }: { coordinates: Array<Coordinate> }): Area {
    return new Area({ coordinates });
  }

  static random(): Area {
    return this.create({
      coordinates: [],
    });
  }
}
