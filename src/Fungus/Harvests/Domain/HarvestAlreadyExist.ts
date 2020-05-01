import { HarvestId } from './HarvestId';

function HarvestAlreadyExist(id: HarvestId): Error {
  return new Error(`Harvest with id: ${id.value()} already exist`);
}

HarvestAlreadyExist.prototype = Object.create(Error.prototype);

export default HarvestAlreadyExist;
