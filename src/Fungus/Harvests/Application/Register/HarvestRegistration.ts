import { Location } from '../../../Locations/Domain/Location';

import { HarvestId } from '../../Domain/HarvestId';
import { Harvest } from '../../Domain/Harvest';
import HarvestAlreadyExist from '../../Domain/HarvestAlreadyExist';
import { HarvestRepository } from '../../Domain/HarvestRepository';

type HarvestRegistrationProps = {
  id: HarvestId;
  date: string;
  quantity: number;
};

export default class HarvestRegistration {
  repository: HarvestRepository;

  constructor(repository: HarvestRepository) {
    this.repository = repository;
  }

  invoke({ id, date, quantity }: HarvestRegistrationProps): void {
    this.ensureStudentDoesNotExist(id);

    const harvest = new Harvest({ id, location: new Location(), date: new Date(date), quantity });

    this.repository.add(harvest);
  }

  ensureStudentDoesNotExist(id: HarvestId): void {
    const existentHarvest = this.repository.findById(id);

    if (existentHarvest) {
      throw HarvestAlreadyExist(id);
    }
  }
}
