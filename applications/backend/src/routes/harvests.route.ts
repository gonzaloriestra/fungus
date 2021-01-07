import { Server } from '@hapi/hapi';

import container from '../config/dependency-injection';

import HarvestsPutController from '../controllers/Harvests/HarvestsPutController';
import HarvestsDeleteController from '../controllers/Harvests/HarvestsDeleteController';
import HarvestsByLocationGetController from '../controllers/Harvests/HarvestsByLocationGetController';

export const register = (app: Server): void => {
  const harvestsPutController: HarvestsPutController = container.get(
    'applications.fungus.controllers.HarvestsPutController',
  );
  const harvestsDeleteController: HarvestsDeleteController = container.get(
    'applications.fungus.controllers.HarvestsDeleteController',
  );
  const harvestsByLocationGetController: HarvestsByLocationGetController = container.get(
    'applications.fungus.controllers.HarvestsByLocationGetController',
  );

  app.route({
    method: 'PUT',
    path: '/harvests/{id}',
    handler: harvestsPutController.run.bind(harvestsPutController),
  });

  app.route({
    method: 'GET',
    path: '/locations/{id}/harvests',
    handler: harvestsByLocationGetController.run.bind(harvestsByLocationGetController),
  });

  app.route({
    method: 'DELETE',
    path: '/harvests',
    handler: harvestsDeleteController.run.bind(harvestsDeleteController),
  });
};
