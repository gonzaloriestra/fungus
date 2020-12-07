import { Id } from '../../../../src/Fungus/Shared/Domain/Id';

describe('Id', () => {
  it('should be able to another id with the same value', () => {
    const fakeUUID = 'this-is-a-fake-uuid';
    const subject = new Id(fakeUUID);
    const aId = new Id(fakeUUID);

    expect(subject.equalTo(aId)).toBeTruthy();
  });

  it('should create unique ids', () => {
    const aId = Id.create();
    const anotherId = Id.create();

    expect(aId.equalTo(anotherId)).toBeFalsy();
  });
});
