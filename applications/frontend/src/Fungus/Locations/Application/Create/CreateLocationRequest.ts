import { LocationId } from '../../../Shared/Domain/LocationId';
import { WeatherStationId } from '../../../Shared/Domain/WeatherStationId';
import { UserId } from '../../../Shared/Domain/UserId';

import { Zone } from '../../Domain/Zone';

export type CreateLocationRequest = {
  id: LocationId;
  name: string;
  zone: Zone;
  weatherStationId?: WeatherStationId;
  userId: UserId;
};
