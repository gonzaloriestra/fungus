import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Container, Icon, Item as SemanticItem } from 'semantic-ui-react';
import { mutate } from 'swr';

import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import getMyLocations from '../../actions/client/locations/getMyLocations';

import Item from '../../components/Item';
import Header, { ActivePage } from '../../components/Header';
import NewLocationModal from '../../components/NewLocationModal';

function Locations(): JSX.Element {
  const { locations, isLoading, error } = getMyLocations();
  const router = useRouter();

  const handleOnSaveNewLocation = () => {
    mutate('/api/me/locations');
  };

  if (error) {
    return <div>Loading failed: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Fungus - Mis Zonas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header activePage={ActivePage.locations} />
      <Container>
        <NewLocationModal show={router.asPath === '/locations/new'} onSave={handleOnSaveNewLocation} />
        <Link href="/locations" as="/locations/new">
          <Button floated="right" primary>
            <Icon name="add" /> Añadir Zona
          </Button>
        </Link>

        <SemanticItem.Group divided relaxed>
          {locations.map((location) => (
            <Item key={location.id} id={location.id} title={location.name} detailsUrl={`locations/${location.id}`} />
          ))}
        </SemanticItem.Group>
      </Container>
    </>
  );
}

export default withClientAuthRequired(Locations);
