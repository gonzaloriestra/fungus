import React from 'react';
import { GetServerSideProps } from 'next';

import Location from './models/Location';
import getLocation from './queries/getLocation';
import Map from './components/Map';

type LocationProps = {
  location: Location;
};

export default function LocationDetails({ location }: LocationProps): JSX.Element {
  return <Map location={location.coordinates} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getLocation({ id: params.id });

  return { props: { location: res.data } };
};
