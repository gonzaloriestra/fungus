import { Location } from './Location';
import { LocationId } from '../../Shared/Domain/LocationId';

export interface LocationRepository {
  add: (location: Location) => void;
  findById: (id: LocationId) => Location | undefined;
  all: () => Array<Location>;
  clean: () => void;
}
