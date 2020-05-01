import { MushroomId } from '../../Domain/MushroomId';

export type MushroomCreatorRequest = {
  id: MushroomId;
  scientificName: string;
};
