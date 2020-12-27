import { LocationId } from '../../../Shared/Domain/Locations/LocationId';
import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

export type MakePredictionRequest = {
  date: Date;
  locationId: LocationId;
  mushroomId: MushroomId;
};
