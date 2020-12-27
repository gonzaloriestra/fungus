import { LocationId } from '../../../Shared/Domain/Locations/LocationId';

import { Zone } from '../../Domain/Zone';

export type CreateLocationRequest = {
  id: LocationId;
  name: string;
  zone: Zone;
};
