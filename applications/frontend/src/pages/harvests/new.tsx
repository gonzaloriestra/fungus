import React, { useState } from 'react';
import { Header, Icon, Form, Button, Select } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { withServerAuthRequired } from '../../authentication/withAuthRequired';

import add from '../../fetching/harvests/add';
import { GetServerSideProps } from 'next';
import getMushrooms from '../../fetching/getMushrooms';

type NewHarvestProps = { mushrooms: Array<{ id: string; scientificName: string }> };

export default function NewHarvest({ mushrooms }: NewHarvestProps): JSX.Element {
  const [date, setDate] = useState('');
  const [mushroomId, setMushroomId] = useState('');
  const [quantity, setQuantity] = useState('');

  const router = useRouter();

  const handleOnSubmit = async () => {
    const locationId = router.query.locationId;

    await add({ date, locationId, mushroomId, quantity });

    router.push(`/locations/${locationId}`);
  };

  function transformMushroomsInOptions() {
    return mushrooms.map((mushroom) => ({ key: mushroom.id, value: mushroom.id, text: mushroom.scientificName }));
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

export const getServerSideProps: GetServerSideProps = withServerAuthRequired(async () => {
  const res = await getMushrooms();

  return { props: { mushrooms: res.data } };
});
