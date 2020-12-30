import { LocationId } from '../../../Shared/Domain/LocationId';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

import { HarvestId } from '../../Domain/HarvestId';

export type CreateHarvestRequest = {
  id: HarvestId;
  mushroomId: MushroomId;
  locationId: LocationId;
  date: string;
  quantity: number;
};
