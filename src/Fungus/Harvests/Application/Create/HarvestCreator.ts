import { MushroomRepository } from '../../../Mushrooms/Domain/MushroomRepository';
import { MushroomId } from '../../../Shared/Domain/MushroomId';
import { MushroomDoesNotExist } from '../../../Mushrooms/Domain/MushroomDoesNotExist';

import { LocationDoesNotExist } from '../../../Locations/Domain/LocationDoesNotExist';
import { LocationId } from '../../../Shared/Domain/LocationId';

import { LocationRepository } from '../../../Locations/Domain/LocationRepository';
import { HarvestId } from '../../Domain/HarvestId';
import { Harvest } from '../../Domain/Harvest';
import { HarvestAlreadyExist } from '../../Domain/HarvestAlreadyExist';

import { HarvestRepository } from '../../Domain/HarvestRepository';
import { CreateHarvestRequest } from './CreateHarvestRequest';

export default class HarvestCreator {
  harvestRepository: HarvestRepository;
  mushroomRepository: MushroomRepository;
  locationRepository: LocationRepository;

  constructor(
    harvestRepository: HarvestRepository,
    mushroomRepository: MushroomRepository,
    locationRepository: LocationRepository,
  ) {
    this.harvestRepository = harvestRepository;
    this.mushroomRepository = mushroomRepository;
    this.locationRepository = locationRepository;
  }

  invoke({ id, mushroomId, locationId, date, quantity }: CreateHarvestRequest): void {
    this.ensureHarvestDoesNotExist(id);
    this.ensureMushroomExist(mushroomId);
    this.ensureLocationExist(locationId);

    const harvest = new Harvest({ id, locationId, mushroomId, date: new Date(date), quantity });

    this.harvestRepository.add(harvest);
  }

  ensureHarvestDoesNotExist(id: HarvestId): void {
    const existentHarvest = this.harvestRepository.findById(id);

    if (existentHarvest) {
      throw new HarvestAlreadyExist(id);
    }
  }

  ensureMushroomExist(mushroomId: MushroomId): void {
    const existentMushroom = this.mushroomRepository.findById(mushroomId);

    if (!existentMushroom) {
      throw new MushroomDoesNotExist(mushroomId);
    }
  }

  ensureLocationExist(locationId: LocationId): void {
    const existentLocation = this.locationRepository.findById(locationId);

    if (!existentLocation) {
      throw new LocationDoesNotExist(locationId);
    }
  }
}
