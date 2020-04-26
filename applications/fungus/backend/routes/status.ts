import { Server } from 'hapi';

// import container from '../config/dependency-injection';
// import StatusController from '../controllers/StatusGetController';

export const register = (app: Server) => {
  // const controller: StatusController = container.get('Apps.mooc.controllers.StatusGetController');
  // app.get('/status', controller.run.bind(controller));

  app.route({
    method: 'GET',
    path: '/status',
    handler: (request: Request, h: Hapi.ResponseToolkit) => 'This is the GET route.',
  });
};