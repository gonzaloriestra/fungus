import { LocationId } from '../../../Locations/Domain/LocationId';
import { MushroomId } from '../../../Mushrooms/Domain/MushroomId';

import { HarvestId } from '../../Domain/HarvestId';

export type CreateHarvestRequest = {
  id: HarvestId;
  mushroomId: MushroomId;
  locationId: LocationId;
  date: string;
  quantity: number;
};
