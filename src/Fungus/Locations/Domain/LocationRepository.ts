import { Location } from './Location';
import { LocationId } from './LocationId';

export interface LocationRepository {
  nextIdentity: () => LocationId;
  add: (mushroom: Location) => void;
  findById: (id: LocationId) => Location | undefined;
  all: () => Array<Location>;
}
