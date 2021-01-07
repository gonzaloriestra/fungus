import { Server } from '@hapi/hapi';

import container from '../config/dependency-injection';

import ForecastsGetController from '../controllers/Forecasts/ForecastsGetController';

export const register = (app: Server): void => {
  const forecastsGetController: ForecastsGetController = container.get(
    'applications.fungus.controllers.ForecastsGetController',
  );

  app.route({
    method: 'GET',
    path: '/forecasts',
    handler: forecastsGetController.run.bind(forecastsGetController),
  });
};
