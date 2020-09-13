import React from 'react';
import { Item as SemanticItem } from 'semantic-ui-react';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';

import Location from './models/Location';
import getLocations from './queries/getLocations';

import Item from './components/Item';

type LocationsProps = {
  locations: Array<Location>;
};

export default function Locations({ locations }: LocationsProps): JSX.Element {
  return (
    <SemanticContainer>
      <SemanticItem.Group divided>
        {locations.map((location) => (
          <Item key={location.id} title={location.name} imageSrc="/map.svg" detailsUrl={`location/${location.id}`} />
        ))}
      </SemanticItem.Group>
    </SemanticContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getLocations();

  return { props: { locations: res.data } };
};
