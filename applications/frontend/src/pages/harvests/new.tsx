import React, { useState } from 'react';
import { Header, Icon, Form, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import addHarvest from './queries/addHarvest';

type NewHarvestProps = { locationId: string };

export default function NewHarvest({ locationId }: NewHarvestProps): JSX.Element {
  const [date, setDate] = useState('');
  const [mushroomId, setMushroomId] = useState('');
  const [quantity, setQuantity] = useState('');

  const router = useRouter();

  const handleOnSubmit = async () => {
    await addHarvest({ date, locationId, mushroomId, quantity });

    router.push(`/locations/${locationId}`);
  };

  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>New Harvest</Header.Content>
      </Header>

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
          <input placeholder="mushroom" onChange={(e): void => setMushroomId(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Quantity</label>
          <input placeholder="quantity" onChange={(e): void => setQuantity(e.target.value)} />
        </Form.Field>
        <Button type="submit" primary>
          Save
        </Button>
      </Form>
    </>
  );
}
