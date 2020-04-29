import { Location } from '../../../Locations/Domain/Location';

import { HarvestId } from '../../Domain/HarvestId';
import { Harvest } from '../../Domain/Harvest';
import HarvestAlreadyExist from '../../Domain/HarvestAlreadyExist';

type HarvestRegistrationProps = {
  id: HarvestId;
  date: string;
  quantity: number;
};

export default class HarvestRegistration {
  invoke({ id, date, quantity }: HarvestRegistrationProps): void {
    this.ensureStudentDoesntExist(id);

    const harvest = new Harvest({ id, location: new Location(), date: new Date(date), quantity });

    // To-Do persist in memory
  }

  ensureStudentDoesntExist(id: HarvestId): void {
    // To-Do read from repository the harvest
    const existentHarvest = null;
    if (null !== existentHarvest) {
      throw HarvestAlreadyExist(id);
    }
  }
}
