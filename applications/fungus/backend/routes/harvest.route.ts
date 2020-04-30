import { Server } from 'hapi';

import container from '../config/dependency-injection';

import HarvestPutController from '../controllers/Harvests/HarvestPutController';

export const register = (app: Server): void => {
  const controller: HarvestPutController = container.get('applications.fungus.controllers.HarvestPutController');

  app.route({
    method: 'PUT',
    path: '/harvests/{id}',
    handler: controller.run.bind(controller),
  });
};
