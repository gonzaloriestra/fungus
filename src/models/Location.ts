import Zone from './Zone';

type Location = {
  id: string;
  name: string;
  // To-Do remove the Array<any>
  zone: Zone;
};

export default Location;
