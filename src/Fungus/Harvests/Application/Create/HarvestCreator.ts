import { Location } from '../../../Locations/Domain/Location';

import { MushroomRepository } from '../../../Mushrooms/Domain/MushroomRepository';
import { MushroomId } from '../../../Mushrooms/Domain/MushroomId';
import { MushroomDoesNotExist } from '../../../Mushrooms/Domain/MushroomDoesNotExist';

import { HarvestId } from '../../Domain/HarvestId';
import { Harvest } from '../../Domain/Harvest';
import { HarvestAlreadyExist } from '../../Domain/HarvestAlreadyExist';
import { HarvestRepository } from '../../Domain/HarvestRepository';

import { HarvestCreatorRequest } from './HarvestCreatorRequest';

export default class HarvestCreator {
  harvestRepository: HarvestRepository;
  mushroomRepository: MushroomRepository;

  constructor(harvestRepository: HarvestRepository, mushroomRepository: MushroomRepository) {
    this.harvestRepository = harvestRepository;
    this.mushroomRepository = mushroomRepository;
  }

  invoke({ id, mushroomId, date, quantity }: HarvestCreatorRequest): void {
    this.ensureHarvestDoesNotExist(id);
    this.ensureMushroomExist(mushroomId);

    const harvest = new Harvest({ id, location: new Location(), date: new Date(date), quantity });

    this.harvestRepository.add(harvest);
  }

  ensureHarvestDoesNotExist(id: HarvestId): void {
    const existentHarvest = this.harvestRepository.findById(id);

    if (existentHarvest) {
      throw HarvestAlreadyExist(id);
    }
  }

  ensureMushroomExist(mushroomId: MushroomId): void {
    const existentMushroom = this.mushroomRepository.findById(mushroomId);

    if (!existentMushroom) {
      throw MushroomDoesNotExist(mushroomId);
    }
  }
}
