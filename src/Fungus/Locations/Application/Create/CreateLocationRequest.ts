import { LocationId } from '../../Domain/LocationId';
import { Area } from '../../Domain/Area';

export type CreateLocationRequest = {
  id: LocationId;
  name: string;
  area: Area;
};