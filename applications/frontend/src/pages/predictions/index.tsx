import React, { useState } from 'react';
import { Button, Container, Form, Select, Header as SemanticHeader, Dimmer, Icon } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { withServerAuthRequired } from '../../authentication/withAuthRequired';

import getMushrooms from '../../fetching/getMushrooms';
import makePrediction from '../../fetching/makePrediction';
import Header, { ActivePage } from '../../components/Header';
import useMyLocations from '../../fetching/useMyLocations';

type PredictionsProps = {
  mushrooms: Array<{ id: string; scientificName: string }>;
  locations: Array<{ id: string; name: string }>;
};

export default function Predictions({ mushrooms }: PredictionsProps): JSX.Element {
  const router = useRouter();

  const [date, setDate] = useState('');
  const [locationId, setLocationId] = useState(router.query.locationId);
  const [mushroomId, setMushroomId] = useState('');
  const [prediction, setPrediction] = useState('');
  const [active, setActive] = useState(false);

  const handleOnSubmit = async () => {
    const response = await makePrediction({ date, locationId, mushroomId });

    setPrediction(response?.data?.probability);

    setActive(true);
  };

  const handleClose = (): void => setActive(false);

  const handleOnChangeLocation = (_, data): void => {
    setLocationId(data.value);

    router.push(`predictions/?locationId=${data.value}`, undefined, { shallow: true });
  };

  function transformLocationsInOptions() {
    const { locations } = useMyLocations();

    return locations?.map((location) => ({ key: location.id, value: location.id, text: location.name }));
  }

  function transformMushroomsInOptions() {
    return mushrooms.map((mushroom) => ({ key: mushroom.id, value: mushroom.id, text: mushroom.scientificName }));
  }

  return (
    <>
      <Header activePage={ActivePage.predictions} />
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <Form.Field>
            <label>¿Cuándo?</label>
            <input type="date" onChange={(e): void => setDate(e.target.value)} placeholder="Introduce fecha" />
          </Form.Field>
          <Form.Field>
            <label>¿Qué seta?</label>
            <Select
              placeholder="Seleciona especie"
              options={transformMushroomsInOptions()}
              // @ts-ignore
              onChange={(_, data): void => setMushroomId(data.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>¿Para qué localización?</label>
            <Select
              placeholder="Seleciona localización"
              options={transformLocationsInOptions()}
              onChange={handleOnChangeLocation}
              value={locationId}
            />
          </Form.Field>
          <Button floated={'right'} type="submit" primary>
            Mostrar predicción
          </Button>
        </Form>
        <Dimmer active={active} onClickOutside={handleClose} page>
          <SemanticHeader as="h2" icon inverted>
            <Icon name="heart" />
            <SemanticHeader.Subheader>{prediction}</SemanticHeader.Subheader>
          </SemanticHeader>
        </Dimmer>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withServerAuthRequired(async () => {
  const resMushrooms = await getMushrooms();

  return { props: { mushrooms: resMushrooms.data } };
});
