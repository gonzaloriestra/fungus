import { Harvest } from "./Harvest";
import { HarvestId } from './HarvestId';

interface HarvestRepository {
  nextIdentity: () => HarvestId,
  add: (harvest: Harvest) => void,
};
