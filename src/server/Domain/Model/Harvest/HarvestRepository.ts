import { Location } from '../../../valueObjects/Location';

import { Harvest } from "./Harvest";
import { HarvestId } from './HarvestId';

export interface HarvestRepository {
  nextIdentity: () => HarvestId,
  add: (harvest: Harvest) => void,
  count: () => number,
  filterBy: ({date, location}: {date?: Date, location?: Location}) => Array<Harvest>
};
