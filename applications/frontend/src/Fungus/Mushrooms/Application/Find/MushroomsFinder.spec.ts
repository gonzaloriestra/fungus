import { mushroomRepository } from '../../Infrastructure';

import { MushroomMother } from '../../Domain/MushroomMother';

import MushroomsFinder from './MushroomsFinder';

describe('MushroomsFinder', () => {
  beforeEach(() => {
    mushroomRepository.clean();
  });

  afterAll(() => {
    mushroomRepository.clean();
  });

  it('should return all existing mushrooms successfully', () => {
    const mushroomOne = MushroomMother.random();
    const mushroomTwo = MushroomMother.random();
    mushroomRepository.add(mushroomOne);
    mushroomRepository.add(mushroomTwo);

    const subject = new MushroomsFinder(mushroomRepository);

    const response = subject.run();

    expect(response.mushrooms.length).toEqual(2);
  });

  it('should return empty list when there are not mushrooms registered', async () => {
    const subject = new MushroomsFinder(mushroomRepository);

    const response = subject.run();

    expect(response.mushrooms.length).toEqual(0);
  });
});
