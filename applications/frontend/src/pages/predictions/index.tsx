import React, { useState } from 'react';
import { Header, Icon, Container, Form, Select, Button, Label } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import { withServerAuthRequired } from '../../authentication/withAuthRequired';
import fetcher from '../../fetching/fetcher';

import getMushrooms from '../harvests/queries/getMushrooms';
import makePrediction from './queries/makePrediction';
import Location from '../locations/models/Location';

type PredictionsProps = {
  mushrooms: Array<{ id: string; scientificName: string }>;
  locations: Array<{ id: string; name: string }>;
};

export default function Predictions({ mushrooms }: PredictionsProps): JSX.Element {
  const [date, setDate] = useState();
  const [locationId, setLocationId] = useState();
  const [mushroomId, setMushroomId] = useState();
  const [prediction, setPrediction] = useState();

  const handleOnSubmit = async () => {
    const response = await makePrediction({ date, locationId, mushroomId });

    setPrediction(response?.data?.probability);
  };

  function transformLocationsInOptions() {
    const result = useSWR(`/api/me/locations`, fetcher);
    const locations: Array<Location> = result.data;
    // const error: Error = result.error;

    // if (error) {
    //   return <div>Loading failed: {error.message}</div>;
    // }

    // if (!locations) {
    //   return <div>Loading...</div>;
    // }

    return locations?.map((location) => ({ key: location.id, value: location.id, text: location.name }));
  }

  function transformMushroomsInOptions() {
    return mushrooms.map((mushroom) => ({ key: mushroom.id, value: mushroom.id, text: mushroom.scientificName }));
  }

  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Predictions</Header.Content>
      </Header>
      <Container>
        <Form
          style={{
            padding: '0 100px',
          }}
          onSubmit={handleOnSubmit}
        >
          <Form.Field>
            <label>Date</label>
            <input type="date" placeholder="Date" onChange={(e): void => setDate(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Mushroom</label>
            <Select
              placeholder="Mushroom"
              options={transformMushroomsInOptions()}
              onChange={(_, data): void => setMushroomId(data.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <Select
              placeholder="Location"
              options={transformLocationsInOptions()}
              onChange={(_, data): void => setLocationId(data.value)}
            />
          </Form.Field>
          <Button type="submit" primary>
            Make prediction
          </Button>
        </Form>
        <Label>{prediction}</Label>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withServerAuthRequired(async () => {
  const resMushrooms = await getMushrooms();

  return { props: { mushrooms: resMushrooms.data } };
});
