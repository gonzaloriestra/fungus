import React from 'react';
import { Item } from 'semantic-ui-react';

import Location from './components/Location';

const LocationsPage = (): JSX.Element => {
  return (
    <Item.Group divided>
      <Location id={'001'} name={'12 Years a Slave'} />
    </Item.Group>
  );
};

export default LocationsPage;
