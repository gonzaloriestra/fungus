import { MushroomId } from '../../../Mushrooms/Domain/MushroomId';

import { HarvestId } from '../../Domain/HarvestId';

export type HarvestCreatorRequest = {
  id: HarvestId;
  mushroomId: MushroomId;
  date: string;
  quantity: number;
};
