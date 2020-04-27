import { Server } from 'hapi';

// import container from '../config/dependency-injection';
import StatusController from '../controllers/StatusGetController';

export const register = (app: Server): void => {
  // const controller: StatusController = container.get('Apps.mooc.controllers.StatusGetController');
  const controller = new StatusController();

  app.route({
    method: 'GET',
    path: '/status',
    handler: controller.run.bind(controller),
  });
};
