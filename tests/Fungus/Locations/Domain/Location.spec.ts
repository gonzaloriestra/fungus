import { UserId } from '../../../../src/Fungus/Shared/Domain/UserId';
import { LocationId } from '../../../../src/Fungus/Shared/Domain/LocationId';

import { Location } from '../../../../src/Fungus/Locations/Domain/Location';
import { Zone } from '../../../../src/Fungus/Locations/Domain/Zone';

describe('Location', () => {
  // To-Do define a entity to inherate from it and make this test there
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const subject = new Location({
        id: LocationId.create(),
        name: 'location one',
        zone: new Zone({ coordinates: [] }),
        userId: UserId.create(),
      });

      expect(subject.equalTo(subject)).toBeTruthy();
    });

    it('should return false for different location instances', () => {
      const subjectOne = new Location({
        id: LocationId.create(),
        name: 'location one',
        zone: new Zone({ coordinates: [] }),
        userId: UserId.create(),
      });
      const subjectTwo = new Location({
        id: LocationId.create(),
        name: 'location two',
        zone: new Zone({ coordinates: [] }),
        userId: UserId.create(),
      });

      expect(subjectOne.equalTo(subjectTwo)).toBeFalsy();
    });
  });
});
