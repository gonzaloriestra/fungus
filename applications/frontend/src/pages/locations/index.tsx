import React from 'react';
import { Header, Icon, Item as SemanticItem, Container, Button } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';

import Location from './models/Location';
import getLocations from './queries/getLocations';

import Item from './components/Item';

type LocationsProps = {
  locations: Array<Location>;
};

export default function Locations({ locations }: LocationsProps): JSX.Element {
  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Locations</Header.Content>
      </Header>
      <Container>
        <Button primary>Add Location</Button>
        <SemanticItem.Group divided>
          {locations.map((location) => (
            <Item key={location.id} title={location.name} imageSrc="/map.svg" detailsUrl={`locations/${location.id}`} />
          ))}
        </SemanticItem.Group>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getLocations();

  return { props: { locations: res.data } };
};
