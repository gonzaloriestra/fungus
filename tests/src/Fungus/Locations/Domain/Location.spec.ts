import { Location } from '../../../../../src/Fungus/Locations/Domain/Location';
import { LocationId } from '../../../../../src/Fungus/Locations/Domain/LocationId';

describe('Location', () => {
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const subject = new Location({ id: LocationId.create(), name: 'location one', coordinates: [] });

      expect(subject.equalTo(subject)).toBeTruthy();
    });

    it('should return false for different location instances', () => {
      const subjectOne = new Location({ id: LocationId.create(), name: 'location one', coordinates: [] });
      const subjectTwo = new Location({ id: LocationId.create(), name: 'location two', coordinates: [] });

      expect(subjectOne.equalTo(subjectTwo)).toBeFalsy();
    });
  });
});
