import { Season } from '../../../../src/Fungus/Predictions/Domain/Season';

describe('Season', () => {
  describe('.isPeriod', () => {
    describe('in summer period', () => {
      const subject = Season.summer();
      it('should return true when the day is July 14', () => {
        const summerDay = new Date(0, 6, 14);

        expect(subject.isPeriod({ date: summerDay })).toBeTruthy();
      });

      it('should return false when the day is April 20', () => {
        const summerDay = new Date(0, 3, 20);

        expect(subject.isPeriod({ date: summerDay })).toBeFalsy();
      });
    });

    describe('in late winters and early spring', () => {
      const subject = Season.lateWinterEarlySpring();
      it('should return true when the day is February 4', () => {
        const winterDay = new Date(0, 1, 4);

        expect(subject.isPeriod({ date: winterDay })).toBeTruthy();
      });

      it('should return false when the day is May 6', () => {
        const springDay = new Date(0, 4, 6);

        expect(subject.isPeriod({ date: springDay })).toBeFalsy();
      });
    });
  });
});
