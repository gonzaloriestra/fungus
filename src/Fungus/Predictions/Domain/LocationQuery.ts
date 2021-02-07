import { LocationId } from '../../Shared/Domain/LocationId';

import { LocationView } from './LocationView';

export interface LocationQuery {
  all: () => Array<LocationView>;
  findById: (id: LocationId) => LocationView | undefined;
}
