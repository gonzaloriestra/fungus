import React from 'react';
import { GetServerSideProps } from 'next';

import Location from './models/Location';
import getLocation from './queries/getLocation';
import Map from './components/Map';

type LocationDetailsProps = {
  location: Location;
};

export default function LocationDetails({ location }: LocationDetailsProps): JSX.Element {
  return (
    <div
      style={{
        height: '500px',
        margin: '100px',
      }}
    >
      <Map location={location} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getLocation({ id: params.id });
  // To-Do: Controls errors
  return { props: { location: res.data } };
};
