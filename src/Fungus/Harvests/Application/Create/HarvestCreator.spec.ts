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
import { MushroomMother } from '../../../Mushrooms/Domain/MushroomMother';
import LocationMother from '../../../Locations/Domain/LocationMother';
import { MushroomDoesNotExist } from '../../../Mushrooms/Domain/MushroomDoesNotExist';
import { LocationDoesNotExist } from '../../../Shared/Domain/LocationDoesNotExist';

describe('HarvestCreator', () => {
  beforeEach(() => {
    harvestRepository.clean();
    mushroomRepository.clean();
    locationRepository.clean();
  });

  afterAll(() => {
    harvestRepository.clean();
    mushroomRepository.clean();
    locationRepository.clean();
  });

  it('should create a new harvest', () => {
    const harvestId = HarvestId.create();
    const mushroom = MushroomMother.random();
    mushroomRepository.add(mushroom);
    const location = LocationMother.random();
    locationRepository.add(location);

    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    subject.run({
      id: harvestId,
      mushroomId: mushroom.id(),
      locationId: location.id(),
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

  it('should not create harvest when mushroom associated does not exist yet', () => {
    const harvestId = HarvestId.create();
    const location = LocationMother.random();
    locationRepository.add(location);
    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    expect(() =>
      subject.run({
        id: harvestId,
        mushroomId: MushroomId.create(),
        locationId: location.id(),
        date: '2020-12-19',
        quantity: 2,
      }),
    ).toThrow(MushroomDoesNotExist);
  });

  it('should not create harvest when location associated does not exist yet', () => {
    const harvestId = HarvestId.create();
    const mushroom = MushroomMother.random();
    mushroomRepository.add(mushroom);
    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    expect(() =>
      subject.run({
        id: harvestId,
        mushroomId: mushroom.id(),
        locationId: LocationId.create(),
        date: '2020-12-19',
        quantity: 2,
      }),
    ).toThrow(LocationDoesNotExist);
  });
});
