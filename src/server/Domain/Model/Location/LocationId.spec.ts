import { LocationId } from './LocationId';

describe('LocationId', () => {
  it('should be able to another id with the same value', () => {
    const fakeUUID = 'this-is-a-fake-uuid';
    const subject = new LocationId(fakeUUID);
    const aLocationId = new LocationId(fakeUUID);

    expect(subject.equalTo(aLocationId)).toBeTruthy();
  });

  it('should create unique ids', () => {
    const aLocation = LocationId.create();
    const anotherLocation = LocationId.create();

    expect(aLocation.equalTo(anotherLocation)).toBeFalsy();
  });
});
