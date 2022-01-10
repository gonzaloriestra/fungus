import React, { useState } from 'react';
import { Header, Icon, Form, Button } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import addHarvest from '../../actions/client/harvests/addHarvest';
import MushroomsSelector from '../../components/MushroomsSelector';

function NewHarvest(): JSX.Element {
  const [date, setDate] = useState('');
  const [mushroomId, setMushroomId] = useState('');
  const [quantity, setQuantity] = useState('');

  const router = useRouter();

  const handleOnSubmit = async () => {
    const locationId = router.query.locationId;

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
          <MushroomsSelector onSelect={setMushroomId} />
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

export default withClientAuthRequired(NewHarvest);
