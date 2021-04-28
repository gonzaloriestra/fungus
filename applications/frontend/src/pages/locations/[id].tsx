import React from 'react';
import { GetServerSideProps } from 'next';
import { Button, Header as SemanticHeader, Icon } from 'semantic-ui-react';

import { withServerAuthRequired } from '../../authentication/withAuthRequired';

import Location from '../../models/Location';
import getLocation from '../../queries/getLocation';
import Map from '../../components/Map';
import HarvestList from '../../components/HarvestList';
import getHarvestsByLocationId from '../../queries/getHarvestsByLocationId';
import Link from 'next/link';
import Header, { ActivePage } from '../../components/Header';

type LocationDetailsProps = {
  location: Location;
  // To-Do make a right model for harvests
  harvests: object;
};

export default function LocationDetails({ location, harvests }: LocationDetailsProps): JSX.Element {
  return (
    <>
      <Header activePage={ActivePage.locations} />
      <div
        style={{
          height: '500px',
          padding: '0 100px',
        }}
      >
        <Map location={location} />
      </div>
      <SemanticHeader as="h2">
        <Icon name="calendar alternate outline" />
        <SemanticHeader.Content>Harvests</SemanticHeader.Content>
      </SemanticHeader>
      <HarvestList harvests={harvests} />
      <Link href={`/harvests/new?locationId=${location.id}`}>
        <Button primary>Add Harvest</Button>
      </Link>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withServerAuthRequired(async ({ params }) => {
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
});
