import { LocationId } from '../../../Shared/Domain/LocationId';
import { MushroomId } from '../../../Shared/Domain/MushroomId';

export type MakePredictionRequest = {
  date: Date;
  locationId: LocationId;
  mushroomId: MushroomId;
};
