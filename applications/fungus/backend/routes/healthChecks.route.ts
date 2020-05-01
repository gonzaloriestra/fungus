import { Server } from 'hapi';

import container from '../config/dependency-injection';
import StatusController from '../controllers/HealthChecks/StatusGetController';

export const register = (app: Server): void => {
  const controller: StatusController = container.get('applications.fungus.controllers.StatusGetController');

  app.route({
    method: 'GET',
    path: '/status',
    handler: controller.run.bind(controller),
  });
};
