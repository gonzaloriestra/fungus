import { MushroomId } from '../../Domain/MushroomId';

export type CreateMushroomRequest = {
  id: MushroomId;
  scientificName: string;
};
