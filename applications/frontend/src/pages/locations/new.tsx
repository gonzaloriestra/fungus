import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Header, Icon, Form, Button } from 'semantic-ui-react';

import Location from './models/Location';
import getLocation from './queries/getLocation';
import Map from './components/Map';
import HarvestList from './components/HarvestList';
import getHarvestsByLocationId from './queries/getHarvestsByLocationId';

type LocationDetailsProps = {};

export default function LocationDetails({}: LocationDetailsProps): JSX.Element {
  const [name, setName] = useState('');

  const handleOnSubmit = () => {
    console.log(name);
  };

  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Location</Header.Content>
      </Header>

      <Form
        style={{
          padding: '0 100px',
        }}
        onSubmit={handleOnSubmit}
      >
        <Form.Field>
          <div
            style={{
              height: '500px',
            }}
          >
            <Map mode="edit" initialZoom={5} />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" onChange={(e): void => setName(e.target.value)} />
        </Form.Field>
        <Button type="submit">Add</Button>
      </Form>
    </>
  );
}
