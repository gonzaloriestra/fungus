import { Coordinate } from '../../Domain/Coordinate';
import { LocationId } from '../../Domain/LocationId';

export type CreateLocationRequest = {
  id: LocationId;
  name: string;
  coordinates: Array<Coordinate>;
};
