import { LocationId } from '../../../Shared/Domain/Locations/LocationId';
import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

import { HarvestId } from '../../Domain/HarvestId';

export type CreateHarvestRequest = {
  id: HarvestId;
  mushroomId: MushroomId;
  locationId: LocationId;
  date: string;
  quantity: number;
};
