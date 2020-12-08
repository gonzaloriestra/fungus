import { InMemoryHarvestRepository } from '../../../../../src/Fungus/Harvests/Infrastructure/InMemoryHarvestRepository';
import HarvestCleaner from '../../../../../src/Fungus/Harvests/Application/Clean/HarvestCleaner';

import HarvestMother from '../../Domain/HarvestMother';

describe('HarvestCleaner', () => {
  it('should remove all the existing Harvest', () => {
    // To-Do mock the repository
    const repository = new InMemoryHarvestRepository();
    repository.add(HarvestMother.random());
    repository.add(HarvestMother.random());
    expect(repository.count()).toEqual(2);

    const subject = new HarvestCleaner(repository);

    subject.run();

    expect(repository.count()).toEqual(0);
  });

  it('should work when there are not Harvests in the repository', () => {
    // To-Do Mock the repository
    const repository = new InMemoryHarvestRepository();
    expect(repository.count()).toEqual(0);

    const subject = new HarvestCleaner(repository);

    subject.run();

    expect(repository.count()).toEqual(0);
  });
});
