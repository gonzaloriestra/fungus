import { Harvest } from './Harvest';
import { Location } from '../../Locations/Domain/Location';

describe('Harvest', () => {
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const subjectOne = new Harvest({ location: new Location(), date: new Date() });

      expect(subjectOne.isEqual(subjectOne)).toBeTruthy();
    });

    it('should return false for different harvest instances', () => {
      const subjectOne = new Harvest({ location: new Location(), date: new Date() });
      const subjectTwo = new Harvest({ location: new Location(), date: new Date() });

      expect(subjectOne.isEqual(subjectTwo)).toBeFalsy();
    });
  });
});
