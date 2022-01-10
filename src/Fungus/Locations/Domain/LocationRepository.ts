import { LocationId } from '../../Shared/Domain/LocationId';
import { UserId } from '../../Shared/Domain/UserId';

import { Location } from './Location';
import { Locations } from './Locations';

export interface LocationRepository {
  add: (location: Location) => void;
  clean: () => void;
  all: () => Locations;
  findById: (id: LocationId) => Location | undefined;
  findByUserId: (userId: UserId) => Locations | undefined;
}
