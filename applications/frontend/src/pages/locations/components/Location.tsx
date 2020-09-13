import React from 'react';
import { Item } from 'semantic-ui-react';

type LocationType = {
  id: string;
  name: string;
};

const Location = ({ id, name }: LocationType): JSX.Element => {
  const locationDetailsUrl = `/location/${id}`;

  return (
    <Item>
      <Item.Image src="/map.svg" />
      <Item.Content>
        <Item.Header as="a" href={locationDetailsUrl}>
          {name}
        </Item.Header>
      </Item.Content>
    </Item>
  );
};

export default Location;
