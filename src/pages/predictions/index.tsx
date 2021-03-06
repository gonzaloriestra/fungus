import React, { useState } from 'react';
import { Button, Container, Form, Select, Header as SemanticHeader, Dimmer, Icon, DropdownItemProps } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import { withClientAuthRequired } from '../../authentication/withAuthRequired';

import makePrediction from '../../actions/client/predictions/makePrediction';
import Header, { ActivePage } from '../../components/Header';
import getMyLocations from '../../actions/client/locations/getMyLocations';
import MushroomsSelector from '../../components/MushroomsSelector';

function Predictions(): JSX.Element {
  const router = useRouter();

  const { locations, isLoading, error } = getMyLocations();

  const [date, setDate] = useState('');
  const [locationId, setLocationId] = useState(router.query.locationId as string);
  const [mushroomId, setMushroomId] = useState('');
  const [prediction, setPrediction] = useState('');
  const [active, setActive] = useState(false);

  const handleOnSubmit = async () => {
    const prediction = await makePrediction({ date, locationId, mushroomId });

    setPrediction(prediction?.probability);

    setActive(true);
  };

  const handleClose = (): void => setActive(false);

  const handleOnChangeLocation = (_: any, data: any): void => {
    setLocationId(data.value);

    router.push(`predictions/?locationId=${data.value}`, undefined, { shallow: true });
  };

  function transformLocationsInOptions(): DropdownItemProps[] {
    return locations?.map((location) => ({ key: location.id, value: location.id, text: location.name })) || [];
  }

  if (error) {
    return <div>Loading failed: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
            <MushroomsSelector onSelect={setMushroomId} />
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

export default withClientAuthRequired(Predictions);
