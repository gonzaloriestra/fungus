import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { mushroomRepository } from '../../Infrastructure';

import { MushroomAlreadyExist } from '../../Domain/MushroomAlreadyExist';
import { MushroomWithSameScientificNameAlreadyExist } from '../../Domain/MushroomWithSameScientificNameAlreadyExist';
import { MushroomMother } from '../../Domain/MushroomMother';

import { MushroomCreator } from './MushroomCreator';
import { Mushroom } from '../../Domain/Mushroom';

describe('MushroomCreator', () => {
  beforeEach(() => {
    mushroomRepository.clean();
  });

  afterAll(() => {
    mushroomRepository.clean();
  });

  it('should create a new mushroom executing all preconditions', () => {
    const mushroomId = MushroomId.create();
    const subject = new MushroomCreator(mushroomRepository);

    subject.run({ id: mushroomId, scientificName: 'Amanita Caesarea' });

    expect(mushroomRepository.findById(mushroomId)).toBeInstanceOf(Mushroom);
  });

  it('should not create existing mushrooms', () => {
    const mushroom = MushroomMother.random();
    mushroomRepository.add(mushroom);

    const subject = new MushroomCreator(mushroomRepository);

    expect(() => subject.run({ id: mushroom.id(), scientificName: mushroom.scientificName() })).toThrow(
      MushroomAlreadyExist,
    );
  });

  it('should not create mushrooms with same scientific name', () => {
    const mushroom = MushroomMother.random();
    mushroomRepository.add(mushroom);

    const subject = new MushroomCreator(mushroomRepository);

    expect(() => subject.run({ id: MushroomId.create(), scientificName: mushroom.scientificName() })).toThrow(
      MushroomWithSameScientificNameAlreadyExist,
    );
  });
});
