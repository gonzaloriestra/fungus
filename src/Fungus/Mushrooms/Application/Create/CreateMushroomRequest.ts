import { MushroomId } from '../../../Shared/Domain/Mushrooms/MushroomId';

export type CreateMushroomRequest = {
  id: MushroomId;
  scientificName: string;
};
