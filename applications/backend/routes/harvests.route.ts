import { Server } from 'hapi';

import container from '../config/dependency-injection';

import HarvestsPutController from '../controllers/Harvests/HarvestsPutController';
import HarvestsDeleteController from '../controllers/Harvests/HarvestsDeleteController';

export const register = (app: Server): void => {
  const harvestsPutController: HarvestsPutController = container.get(
    'applications.fungus.controllers.HarvestsPutController',
  );
  const harvestsDeleteController: HarvestsDeleteController = container.get(
    'applications.fungus.controllers.HarvestsDeleteController',
  );

  app.route({
    method: 'PUT',
    path: '/harvests/{id}',
    handler: harvestsPutController.run.bind(harvestsPutController),
  });

  app.route({
    method: 'DELETE',
    path: '/harvests',
    handler: harvestsDeleteController.run.bind(harvestsDeleteController),
  });
};
