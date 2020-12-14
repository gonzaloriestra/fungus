import { LocationId } from '../../../Shared/Domain/LocationId';

import { Zone } from '../../Domain/Zone';

export type CreateLocationRequest = {
  id: LocationId;
  name: string;
  zone: Zone;
};
