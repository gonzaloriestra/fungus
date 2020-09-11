import * as React from 'react';
import { Table } from 'semantic-ui-react';

import { Harvest } from '../../../../../src/Fungus/Harvests/Domain/Harvest';

type HarvestTableProps = {
  harvests?: Harvest[];
};

export const HarvestTable = ({ harvests = [] }: HarvestTableProps): JSX.Element => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Mushroom</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {harvests.map((harvest) => {
        return (
          <Table.Row key={harvest.date().toString()}>
            <Table.Cell>{harvest.date()}</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>{harvest.quantity()}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
);
