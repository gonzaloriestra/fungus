import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import { GetServerSideProps } from 'next';

import Forecast from './models/Forecast';
import ForecastList from './components/ForecastList';
import getForecasts from './queries/getForecasts';

type ForecastsProps = {
  forecasts: Array<Forecast>;
  date: Date;
};

export default function Forecasts({ forecasts, date }: ForecastsProps): JSX.Element {
  return (
    <>
      <Header as="h1">
        <Icon name="map outline" />
        <Header.Content>Forecasts for {date}</Header.Content>
      </Header>
      <Container>
        <ForecastList forecasts={forecasts} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getForecasts();

  return { props: res.data };
};
