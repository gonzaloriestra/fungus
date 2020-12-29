import { LocationId } from '../../Shared/Domain/Locations/LocationId';

import { Location } from './Location';
import { Locations } from './Locations';

export interface LocationRepository {
  add: (location: Location) => void;
  findById: (id: LocationId) => Location | undefined;
  all: () => Locations;
  clean: () => void;
}
