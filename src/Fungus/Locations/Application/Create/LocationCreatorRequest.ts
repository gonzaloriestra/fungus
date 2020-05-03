import { Coordinate } from '../../Domain/Coordinate';
import { LocationId } from '../../Domain/LocationId';

export type LocationCreatorRequest = {
  id: LocationId;
  name: string;
  coordinates: Array<Coordinate>;
};
