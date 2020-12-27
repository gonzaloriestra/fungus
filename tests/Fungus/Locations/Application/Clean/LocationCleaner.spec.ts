import { LocationCleaner } from '../../../../../src/Fungus/Locations/Application/Clean/LocationCleaner';

import { LocationRepositoryMock } from '../../Domain/LocationRepositoryMock';

describe('LocationCleaner', () => {
  let mockLocationRepository: LocationRepositoryMock;

  beforeEach(() => {
    mockLocationRepository = new LocationRepositoryMock();
  });

  it('should clean the repository', () => {
    const subject = new LocationCleaner(mockLocationRepository);

    subject.run();

    mockLocationRepository.assertCleanHasBeenCalled();
  });
});
