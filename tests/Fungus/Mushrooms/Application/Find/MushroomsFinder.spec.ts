import { MushroomsFinder } from '../../../../../src/Fungus/Mushrooms/Application/Find/MushroomsFinder';

import { Mushrooms } from '../../../../../src/Fungus/Mushrooms/Domain/Mushrooms';

import { MushroomMother } from '../../Domain/MushroomMother';
import { MushroomRepositoryMock } from '../../Domain/MushroomRepositoryMock';

describe('MushroomsFinder', () => {
  let mockMushroomRepository: MushroomRepositoryMock;

  beforeEach(() => {
    mockMushroomRepository = new MushroomRepositoryMock();
  });

  it('should return all existing mushrooms successfully', () => {
    const mushroomOne = MushroomMother.random();
    const mushroomTwo = MushroomMother.random();
    mockMushroomRepository.returnOnAll(new Mushrooms({ mushrooms: [mushroomOne, mushroomTwo] }));

    const subject = new MushroomsFinder(mockMushroomRepository);

    const response = subject.run();

    mockMushroomRepository.assertAllHasBeenCalled();
    expect(response.mushrooms.length).toEqual(2);
  });
});
