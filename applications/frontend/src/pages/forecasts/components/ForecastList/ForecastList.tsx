import React from 'react';
import { List } from 'semantic-ui-react';

import Forecast from '../../models/Forecast';

const ForecastList = ({ forecasts }: { forecasts: Array<Forecast> }): JSX.Element => {
  return (
    <List>
      {forecasts.map((forecast) => (
        <List.Item key={forecast.locationId}>
          <List.Content>
            <List.Header as="a">Location - {forecast.locationId}</List.Header>
            <List.Description>Probability - {forecast.probability}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default ForecastList;
