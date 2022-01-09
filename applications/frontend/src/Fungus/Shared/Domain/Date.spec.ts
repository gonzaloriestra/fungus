import Date from './Date';

describe('Date', () => {
  describe('.dayOfYear', () => {
    it('should consider as first day 01 of January', () => {
      const date = new Date('2020-01-01');

      expect(date.dayOfYear()).toEqual(1);
    });

    it('should consider leap years', () => {
      const date = new Date('2020-12-31');

      expect(date.dayOfYear()).toEqual(366);
    });
  });

  describe('.UTCFormat', () => {
    test.each([
      ['2020-1-1', true, '2020-01-01T00:00:00UTC'],
      ['2020-1-1', false, '2020-01-01T23:59:59UTC'],
      ['2020-12-19', true, '2020-12-19T00:00:00UTC'],
      ['2020-12-19', undefined, '2020-12-19T23:59:59UTC'],
    ])('should format the date as expected', (date, resetTime, expected) => {
      expect(new Date(date).UTCFormat({ resetTime })).toEqual(expected);
    });
  });
});
