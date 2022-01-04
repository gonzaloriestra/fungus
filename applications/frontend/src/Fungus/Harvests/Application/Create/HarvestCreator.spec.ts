// ToDo: Importing here element from other modules
import { mushroomRepository } from '../../../Mushrooms/Infrastructure';
import { locationRepository } from '../../../Locations/Infrastructure';
import { MushroomId } from '../../../Shared/Domain/MushroomId';
import { LocationId } from '../../../Shared/Domain/LocationId';

import { harvestRepository } from '../../Infrastructure';

import HarvestMother from '../../Domain/HarvestMother';
import { HarvestAlreadyExist } from '../../Domain/HarvestAlreadyExist';
import { HarvestId } from '../../Domain/HarvestId';
import { Harvest } from '../../Domain/Harvest';

import HarvestCreator from './HarvestCreator';

describe('HarvestCreator', () => {
  beforeEach(() => {
    harvestRepository.clean();
  });

  afterAll(() => {
    harvestRepository.clean();
  });

  it('should create a new harvest', () => {
    const harvestId = HarvestId.create();
    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    subject.run({
      id: harvestId,
      mushroomId: MushroomId.create(),
      locationId: LocationId.create(),
      date: '2020-12-19',
      quantity: 2,
    });

    expect(harvestRepository.findById(harvestId)).toBeInstanceOf(Harvest);
  });

  it('should not create existing harvest', () => {
    const harvest = HarvestMother.random();
    harvestRepository.add(harvest);
    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    expect(() =>
      subject.run({
        id: harvest.id(),
        mushroomId: MushroomId.create(),
        locationId: LocationId.create(),
        date: '2020-12-19',
        quantity: 2,
      }),
    ).toThrow(HarvestAlreadyExist);
  });
});
