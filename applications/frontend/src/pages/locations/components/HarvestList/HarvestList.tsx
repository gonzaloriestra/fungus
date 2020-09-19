import React from 'react';
import { List } from 'semantic-ui-react';

const HarvestList = ({ harvests }): JSX.Element => {
  return (
    <List>
      {harvests.map((harvest) => (
        <List.Item>
          <List.Icon color="teal" name="tree" />
          <List.Icon color="grey" name="tree" />
          <List.Icon color="grey" name="tree" />
          <List.Content>
            <List.Header as="a">{harvest.date}</List.Header>
            <List.Description>Boletus edulis</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default HarvestList;
