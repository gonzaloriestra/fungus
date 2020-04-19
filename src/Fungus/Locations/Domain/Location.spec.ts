import { Location } from './Location';

describe('Location', () => {
  describe('.isEqual', () => {
    it('should return true when you compare the same object', () => {
      const subject = new Location();

      expect(subject.isEqual(subject)).toBeTruthy();
    });

    it('should return false for different harvest instances', () => {
      const subjectOne = new Location();
      const subjectTwo = new Location();

      expect(subjectOne.isEqual(subjectTwo)).toBeFalsy();
    });
  });
});
