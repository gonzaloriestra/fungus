import { MushroomId } from '../../../../../src/Fungus/Shared/Domain/Mushrooms/MushroomId';

import { MushroomCreator } from '../../../../../src/Fungus/Mushrooms/Application/Create/MushroomCreator';
import { Mushroom } from '../../../../../src/Fungus/Mushrooms/Domain/Mushroom';
import { MushroomAlreadyExist } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomAlreadyExist';
import { MushroomWithSameScientificNameAlreadyExist } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomWithSameScientificNameAlreadyExist';

import { MushroomRepositoryMock } from '../../Domain/MushroomRepositoryMock';

describe('MushroomCreator', () => {
  let mockMushroomRepository: MushroomRepositoryMock;

  beforeEach(() => {
    mockMushroomRepository = new MushroomRepositoryMock();
  });

  it('should create a new mushroom executing all preconditions', () => {
    const subject = new MushroomCreator(mockMushroomRepository);

    subject.run({ id: MushroomId.create(), scientificName: 'Amanita Caesarea' });

    mockMushroomRepository.assertFindByIdHasBeenCalled();
    mockMushroomRepository.assertFindByScientificNameHasBeenCalled();
    mockMushroomRepository.assertAddHasBeenCalled();
  });

  it('should not create existing mushrooms', () => {
    const mushroom = new Mushroom({ id: MushroomId.create(), scientificName: 'Amanita Caesarea' });
    mockMushroomRepository.returnOnFindById(mushroom);
    const subject = new MushroomCreator(mockMushroomRepository);

    expect(() => subject.run({ id: mushroom.id(), scientificName: 'Boletus Edulis' })).toThrow(MushroomAlreadyExist);

    mockMushroomRepository.assertAddHasNotBeenCalled();
  });

  it('should not create mushrooms with same scientific name', () => {
    const mushroom = new Mushroom({ id: MushroomId.create(), scientificName: 'Amanita Caesarea' });
    mockMushroomRepository.returnOnFindByScientificName(mushroom);
    const subject = new MushroomCreator(mockMushroomRepository);

    expect(() => subject.run({ id: MushroomId.create(), scientificName: mushroom.scientificName() })).toThrow(
      MushroomWithSameScientificNameAlreadyExist,
    );

    mockMushroomRepository.assertAddHasNotBeenCalled();
  });
});
