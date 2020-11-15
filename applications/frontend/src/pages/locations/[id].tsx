import React from 'react';
import { GetServerSideProps } from 'next';
import { Button, Header, Icon } from 'semantic-ui-react';

import Location from './models/Location';
import getLocation from './queries/getLocation';
import Map from './components/Map';
import HarvestList from './components/HarvestList';
import getHarvestsByLocationId from './queries/getHarvestsByLocationId';
import Link from 'next/link';

type LocationDetailsProps = {
  location: Location;
};

export default function LocationDetails({ location, harvests }: LocationDetailsProps): JSX.Element {
  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Location</Header.Content>
      </Header>
      <div
        style={{
          height: '500px',
          padding: '0 100px',
        }}
      >
        <Map location={location} />
      </div>
      <Header as="h2">
        <Icon name="calendar alternate outline" />
        <Header.Content>Harvests</Header.Content>
      </Header>
      <HarvestList harvests={harvests} />
      <Link href={`/harvests/new?locationId=${location.id}`}>
        <Button primary>Add Harvest</Button>
      </Link>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const resLocation = await getLocation({ id: params.id });

  let harvests;
  try {
    const resHarvests = await getHarvestsByLocationId({ locationId: params.id });
    harvests = resHarvests?.data;
  } catch (error) {
    harvests = [];
  }

  // To-Do: Controls errors
  return { props: { location: resLocation.data, harvests } };
};
