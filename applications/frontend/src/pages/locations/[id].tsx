import React from 'react';
import { Button, Header as SemanticHeader, Icon } from 'semantic-ui-react';

import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import useMyLocation from '../../queries/useMyLocation';
import Map from '../../components/Map';
import HarvestList from '../../components/HarvestList';
import Link from 'next/link';
import Header, { ActivePage } from '../../components/Header';
import { useRouter } from 'next/router';
import getHarvestsByLocationId from '../../queries/getHarvestsByLocationId';

const LocationDetails = (): JSX.Element => {
  const router = useRouter();

  const { location, isLoading, error } = useMyLocation({ id: router.query.id });

  if (error) {
    // To-Do Implement error behaviour
    return <div>Loading failed: {error.message}</div>;
  }

  return (
    <>
      <Header activePage={ActivePage.locations} />
      <div
        style={{
          height: '500px',
          padding: '0 100px',
        }}
      >
        {/*To-Do implement spinner here for isLoading of location*/}
        {location && <Map location={location} />}
      </div>
      <SemanticHeader as="h2">
        <Icon name="calendar alternate outline" />
        <SemanticHeader.Content>Harvests</SemanticHeader.Content>
      </SemanticHeader>
      {/*<HarvestList harvests={harvests} />*/}
      {/*<Link href={`/harvests/new?locationId=${location.id}`}>*/}
      {/*  <Button primary>Add Harvest</Button>*/}
      {/*</Link>*/}
    </>
  );
};

export default withClientAuthRequired(LocationDetails);
