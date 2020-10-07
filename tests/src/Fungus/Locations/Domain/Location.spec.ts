import { Location } from '../../../../../src/Fungus/Locations/Domain/Location';
import { LocationId } from '../../../../../src/Fungus/Locations/Domain/LocationId';
import { Area } from '../../../../../src/Fungus/Locations/Domain/Area';

describe('Location', () => {
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const subject = new Location({
        id: LocationId.create(),
        name: 'location one',
        area: new Area({ coordinates: [] }),
      });

      expect(subject.equalTo(subject)).toBeTruthy();
    });

    it('should return false for different location instances', () => {
      const subjectOne = new Location({
        id: LocationId.create(),
        name: 'location one',
        area: new Area({ coordinates: [] }),
      });
      const subjectTwo = new Location({
        id: LocationId.create(),
        name: 'location two',
        area: new Area({ coordinates: [] }),
      });

      expect(subjectOne.equalTo(subjectTwo)).toBeFalsy();
    });
  });
});
