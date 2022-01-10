// ToDo from antoher module
import LocationMother from '../../../Locations/Domain/LocationMother';

import { harvestRepository } from '../../Infrastructure';

import HarvestMother from '../../Domain/HarvestMother';

import HarvestsByLocationFinder from './HarvestsByLocationFinder';

describe('HarvestsByLocationFinder', () => {
  beforeEach(() => {
    harvestRepository.clean();
  });

  afterAll(() => {
    harvestRepository.clean();
  });

  it('should return all the harvests of a location', () => {
    const location = LocationMother.random();
    const harvestOne = HarvestMother.create({ locationId: location.id() });
    harvestRepository.add(harvestOne);
    const harvestTwo = HarvestMother.create({ locationId: location.id() });
    harvestRepository.add(harvestTwo);

    const subject = new HarvestsByLocationFinder(harvestRepository);
    const response = subject.run({ locationId: location.id() });

    expect(response.harvests.length).toEqual(2);
  });

  it('should get empty response when there is not any harvest defined', () => {
    const location = LocationMother.random();

    const subject = new HarvestsByLocationFinder(harvestRepository);
    const response = subject.run({ locationId: location.id() });

    expect(response.harvests.length).toEqual(0);
  });
});
