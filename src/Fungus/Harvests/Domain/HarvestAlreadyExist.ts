import { HarvestId } from './HarvestId';

export class HarvestAlreadyExist extends Error {
  constructor(id: HarvestId) {
    super(`Harvest with id: ${id.value()} already exist`);
  }
}
