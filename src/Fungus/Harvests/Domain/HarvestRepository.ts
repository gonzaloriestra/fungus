import { LocationId } from '../../Shared/Domain/Locations/LocationId';

import { Harvest } from './Harvest';
import { HarvestId } from './HarvestId';
import { Harvests } from './Harvests';

export interface HarvestRepository {
  add: (harvest: Harvest) => void;
  count: () => number;
  filterBy: ({ date, locationId }: { date?: Date; locationId?: LocationId }) => Harvests;
  findById: (id: HarvestId) => Harvest | undefined;
  all: () => Harvests;
  clean: () => void;
}
