import React from 'react';
import { Item as SemanticItem } from 'semantic-ui-react';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';

import Location from './models/Location';
import getLocation from './queries/getLocation';

import Item from './components/Item';

type LocationProps = {
  location: Location;
};

export default function LocationDetails({ location }: LocationProps): JSX.Element {
  return (
    <SemanticContainer>
      <SemanticItem.Group divided>
        {
          <Item key={location.id} title={location.name} imageSrc="/map.svg" detailsUrl={`location/${location.id}`} />
        }
      </SemanticItem.Group>
    </SemanticContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getLocation({ id: params.id });

  return { props: { location: res.data } };
};
