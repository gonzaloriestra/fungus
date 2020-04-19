import { HarvestId } from '../../../../../src/Fungus/Harvests/Domain/HarvestId';

describe('HarvestId', () => {
  it('should be able to another id with the same value', () => {
    const fakeUUID = 'this-is-a-fake-uuid';
    const subject = new HarvestId(fakeUUID);
    const aHarvestId = new HarvestId(fakeUUID);

    expect(subject.equalTo(aHarvestId)).toBeTruthy();
  });

  it('should create unique ids', () => {
    const aHarvest = HarvestId.create();
    const anotherHarvest = HarvestId.create();

    expect(aHarvest.equalTo(anotherHarvest)).toBeFalsy();
  });
});
