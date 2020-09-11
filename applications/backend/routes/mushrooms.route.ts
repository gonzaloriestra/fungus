import { Server } from 'hapi';

import container from '../config/dependency-injection';

import MushroomPutController from '../controllers/Mushrooms/MushroomPutController';

export const register = (app: Server): void => {
  const controller: MushroomPutController = container.get('applications.fungus.controllers.MushroomPutController');

  app.route({
    method: 'PUT',
    path: '/mushrooms/{id}',
    handler: controller.run.bind(controller),
  });
};
