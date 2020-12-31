import Coordinate from './Coordinate';

type Location = {
  id: string;
  name: string;
  zone: { coordinates: Array<Coordinate> };
};

export default Location;
