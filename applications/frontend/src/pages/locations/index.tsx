import React from 'react';
import Head from 'next/head';
import { Item as SemanticItem, Container, Button, Menu, Icon } from 'semantic-ui-react';
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
      <Head>
        <title>Fungus - Mis Zonas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu size="large" inverted stackable>
        <Menu.Item name="locations" active>
          Mis Zonas
        </Menu.Item>
        <Menu.Item name="predictions" href="/predictions">
          Hacer predicción
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="logout" href="/api/auth/logout">
            Cerrar Sesión
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Button as="a" floated="right" primary href="/locations/new">
          <Icon name="add" /> Añadir Zona
        </Button>
        <SemanticItem.Group divided relaxed>
          {locations.map((location) => (
            <Item key={location.id} title={location.name} detailsUrl={`locations/${location.id}`} />
          ))}
        </SemanticItem.Group>
      </Container>
    </>
  );
}

export default withClientAuthRequired(Locations);
