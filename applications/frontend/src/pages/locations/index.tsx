import React from 'react';
import { Header, Icon, Item as SemanticItem, Container, Button } from 'semantic-ui-react';
import Link from 'next/link';
import useSWR from 'swr';

import fetcher from '../../fetching/fetcher';
import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import Location from './models/Location';

import Item from './components/Item';

function Locations(): JSX.Element {
  const result = useSWR(`/api/me/locations`, fetcher);

  const locations: Array<Location> = result.data;
  const error: Error = result.error;

  if (error) {
    return <div>Loading failed: {error.message}</div>;
  }

  if (!locations) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Locations</Header.Content>
      </Header>
      <Container>
        <Link href="/locations/new">
          <Button primary>Add Location</Button>
        </Link>
        <SemanticItem.Group divided>
          {locations.map((location) => (
            <Item key={location.id} title={location.name} imageSrc="/map.svg" detailsUrl={`locations/${location.id}`} />
          ))}
        </SemanticItem.Group>
      </Container>
    </>
  );
}

export default withClientAuthRequired(Locations);
