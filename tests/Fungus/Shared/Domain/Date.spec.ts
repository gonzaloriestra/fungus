import Date from '../../../../src/Fungus/Shared/Domain/Date';

describe('Date', () => {
  it('should consider as first day 01 of January', () => {
    const date = new Date('2020-01-01');

    expect(date.dayOfYear()).toEqual(1);
  });

  it('should consider leap years', () => {
    const date = new Date('2020-12-31');

    expect(date.dayOfYear()).toEqual(366);
  });
});
