import React, { useState } from 'react';
import { Header, Icon, Form, Button, Select } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import addHarvest from '../../actions/commands/addHarvest';
import getMushrooms from '../../actions/queries/getMushrooms';

function NewHarvest(): JSX.Element {
  const { mushrooms, isLoading, error } = getMushrooms();
  const [date, setDate] = useState('');
  const [mushroomId, setMushroomId] = useState('');
  const [quantity, setQuantity] = useState('');

  const router = useRouter();

  const handleOnSubmit = async () => {
    const locationId = router.query.locationId;

    await addHarvest({ date, locationId, mushroomId, quantity });

    router.push(`/locations/${locationId}`);
  };

  function transformMushroomsInOptions() {
    return mushrooms.map((mushroom) => ({ key: mushroom.id, value: mushroom.id, text: mushroom.scientificName }));
  }

  if (error) {
    return <div>Loading failed: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
          <Select
            placeholder="Mushroom"
            options={transformMushroomsInOptions()}
            // @ts-ignore
            onChange={(_, data: { value: string }): void => setMushroomId(data.value)}
          />
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
