import { Server } from 'hapi';

import container from '../config/dependency-injection';

import LocationPutController from '../controllers/Locations/LocationPutController';

export const register = (app: Server): void => {
  const controller: LocationPutController = container.get('applications.fungus.controllers.LocationPutController');

  app.route({
    method: 'PUT',
    path: '/locations/{id}',
    handler: controller.run.bind(controller),
  });
};
