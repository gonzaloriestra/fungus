import Coordinate from './Coordinate';

type Zone = {
  id?: string;
  name: string;
  midpoint: Coordinate;
  coordinates: Array<Coordinate>;
};

export default Zone;
