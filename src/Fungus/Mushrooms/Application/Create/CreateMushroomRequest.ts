import { MushroomId } from '../../../Shared/Domain/MushroomId';

export type CreateMushroomRequest = {
  id: MushroomId;
  scientificName: string;
};
