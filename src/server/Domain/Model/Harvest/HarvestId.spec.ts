import { HarvestId } from './HarvestId';

describe('HarvestId', () => {;
  const fakeUUID = 'this-is-a-fake-uuid';
  const subject = new HarvestId(fakeUUID);

  it('should be able to another id with the same value', () => {
    const aHarvestId = new HarvestId(fakeUUID)

    expect(subject.equalTo(aHarvestId)).toBeTruthy();
  });
});
