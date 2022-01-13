import React from 'react';
import { List } from 'semantic-ui-react';
import Harvests from '../../models/Harvests';

type HarvestListProps = { harvests: Harvests };

const HarvestList = ({ harvests }: HarvestListProps): JSX.Element => {
  return (
    <List>
      {harvests.map((harvest) => (
        <List.Item key={harvest.id}>
          <List.Content>
            <List.Header as="a">{harvest.date}</List.Header>
            <List.Description>Mushroom - {harvest.mushroomId}</List.Description>
            <List.Description>Quantity {harvest.quantity}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default HarvestList;
