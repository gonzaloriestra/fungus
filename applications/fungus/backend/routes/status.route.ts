import { Server } from 'hapi';

// import container from '../config/dependency-injection';
import StatusController from '../controllers/StatusGetController';

export const register = (app: Server): void => {
  // const controller: StatusController = container.get('Apps.mooc.controllers.StatusGetController');
  // app.get('/status', controller.run.bind(controller));

  const controller = new StatusController();

  app.route({
    method: 'GET',
    path: '/status',
    handler: controller.run,
  });
};
