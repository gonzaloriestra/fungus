import { MushroomView } from './MushroomView';
// To-Do move to shared folders
import { MushroomId } from '../../Domain/MushroomId';

export interface MushroomQuery {
  findById: (mushroomId: MushroomId) => MushroomView | undefined;
}
