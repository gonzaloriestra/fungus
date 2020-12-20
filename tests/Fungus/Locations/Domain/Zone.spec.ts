import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';
import { Coordinate } from '../../../../src/Fungus/Locations/Domain/Coordinate';

describe('Zone', () => {
  describe('.midpoint', () => {
    it('should return the center of the zone when we only have two coordinates', () => {
      const coordinateOne = new Coordinate({ latitude: 0, longitude: 0 });
      const coordinateTwo = new Coordinate({ latitude: 6, longitude: 0 });
      const midpoint = new Coordinate({ latitude: 3, longitude: 0 });

      const subject = new Zone({ coordinates: [coordinateOne, coordinateTwo] });

      expect(subject.midpoint()).toEqual(midpoint);
    });

    it('should return the center of the zone when the zone is a triangle', () => {
      const coordinateOne = new Coordinate({ latitude: 0, longitude: 0 });
      const coordinateTwo = new Coordinate({ latitude: 6, longitude: 0 });
      const coordinateThree = new Coordinate({ latitude: 3, longitude: 6 });
      const midpoint = new Coordinate({ latitude: 3, longitude: 2 });

      const subject = new Zone({ coordinates: [coordinateOne, coordinateTwo, coordinateThree] });

      expect(subject.midpoint()).toEqual(midpoint);
    });

    it('should return the center of the zone when the zone is a scare', () => {
      const coordinateOne = new Coordinate({ latitude: 0, longitude: 0 });
      const coordinateTwo = new Coordinate({ latitude: 6, longitude: 0 });
      const coordinateThree = new Coordinate({ latitude: 0, longitude: 6 });
      const coordinateFour = new Coordinate({ latitude: 6, longitude: 6 });
      const midpoint = new Coordinate({ latitude: 3, longitude: 3 });

      const subject = new Zone({ coordinates: [coordinateOne, coordinateTwo, coordinateThree, coordinateFour] });

      expect(subject.midpoint()).toEqual(midpoint);
    });
  });
});
