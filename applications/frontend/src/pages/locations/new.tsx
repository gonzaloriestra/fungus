import React, { useState } from 'react';
import { Header, Icon, Form, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import Map from './components/Map';
import addLocation from './queries/addLocation';

type NewLocationProps = {};

export default function NewLocation({}: NewLocationProps): JSX.Element {
  const [name, setName] = useState('');
  const [zone, setZone] = useState([]);
  const router = useRouter();

  const handleOnSubmit = async () => {
    await addLocation({ name, zone });

    router.push('/locations');
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
            <Map mode="edit" initialZoom={5} onLocationCreated={(zone): void => setZone(zone)} />
          </div>
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" onChange={(e): void => setName(e.target.value)} />
        </Form.Field>
        <Button type="submit" primary>
          Save
        </Button>
      </Form>
    </>
  );
}
