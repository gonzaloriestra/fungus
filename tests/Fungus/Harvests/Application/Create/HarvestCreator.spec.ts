import { InMemoryMushroomRepository } from '../../../../../src/Fungus/Mushrooms/Infrastructure/InMemoryMushroomRepository';
import { InMemoryLocationRepository } from '../../../../../src/Fungus/Locations/Infrastructure/InMemoryLocationRepository';

import { InMemoryHarvestRepository } from '../../../../../src/Fungus/Harvests/Infrastructure/InMemoryHarvestRepository';
import HarvestCreator from '../../../../../src/Fungus/Harvests/Application/Create/HarvestCreator';

import { HarvestId } from '../../../../../src/Fungus/Harvests/Domain/HarvestId';
import { HarvestRepository } from '../../../../../src/Fungus/Harvests/Domain/HarvestRepository';
import { MushroomRepository } from '../../../../../src/Fungus/Mushrooms/Domain/MushroomRepository';
import { LocationRepository } from '../../../../../src/Fungus/Locations/Domain/LocationRepository';
import MushroomMother from '../../../Mushrooms/Domain/MushroomMother';
import LocationMother from '../../../Locations/Domain/LocationMother';

describe('HarvestCreator', () => {
  it('should remove all the existing Harvest', () => {
    // To-Do instead a InMemory, it should be a mock
    const harvestRepository: HarvestRepository = new InMemoryHarvestRepository();
    // To-Do Avoid repositories here, we should use the queries
    const mushroomRepository: MushroomRepository = new InMemoryMushroomRepository();
    const mushroom = MushroomMother.random();
    mushroomRepository.add(mushroom);
    const locationRepository: LocationRepository = new InMemoryLocationRepository();
    const location = LocationMother.random();
    locationRepository.add(location);

    const subject = new HarvestCreator(harvestRepository, mushroomRepository, locationRepository);

    subject.run({
      id: HarvestId.create(),
      mushroomId: mushroom.id(),
      locationId: location.id(),
      date: '2020-12-19',
      quantity: 2,
    });

    expect(locationRepository.findById(location.id())).not.toBeUndefined();
  });
});
