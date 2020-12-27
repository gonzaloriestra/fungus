import MushroomsCleaner from '../../../../../src/Fungus/Mushrooms/Application/Clean/MushroomsCleaner';

import MushroomRepositoryMock from '../../Domain/MushroomRepositoryMock';

describe('MushroomCleaner', () => {
  let mockMushroomRepository: MushroomRepositoryMock;

  beforeEach(() => {
    mockMushroomRepository = new MushroomRepositoryMock();
  });

  it('should clean the repository', () => {
    const subject = new MushroomsCleaner(mockMushroomRepository);

    subject.run();

    mockMushroomRepository.assertCleanHasBeenCalled();
  });
});
