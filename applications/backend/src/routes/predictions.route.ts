import { Server } from '@hapi/hapi';

import container from '../config/dependency-injection';

import PredictionsGetController from '../controllers/Predictions/PredictionsGetController';

export const register = (app: Server): void => {
  const predictionsGetController: PredictionsGetController = container.get(
    'fungus.controllers.PredictionsGetController',
  );

  app.route({
    method: 'GET',
    path: '/locations/{locationId}/mushrooms/{mushroomId}/predictions',
    handler: predictionsGetController.run.bind(predictionsGetController),
  });
};
