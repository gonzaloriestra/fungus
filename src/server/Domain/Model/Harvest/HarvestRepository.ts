import { Harvest } from "./Harvest";
import { HarvestId } from './HarvestId';

export interface HarvestRepository {
  nextIdentity: () => HarvestId,
  add: (harvest: Harvest) => void,
  // TO DO: remove history and use the repository as the history
};
