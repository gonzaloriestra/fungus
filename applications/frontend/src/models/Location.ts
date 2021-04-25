import Coordinate from './Coordinate';

type Location = {
  id?: string;
  name: string;
  // To-Do remove the Array<any>
  zone: { coordinates: Array<Coordinate> } | Array<any>;
};

export default Location;
