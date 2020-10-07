import { Server } from 'hapi';

import container from '../config/dependency-injection';

import MushroomPutController from '../controllers/Mushrooms/MushroomPutController';
import MushroomsDeleteController from '../controllers/Mushrooms/MushroomsDeleteController';
import MushroomsGetController from '../controllers/Mushrooms/MushroomsGetController';

export const register = (app: Server): void => {
  const mushroomPutController: MushroomPutController = container.get(
    'applications.fungus.controllers.MushroomPutController',
  );
  app.route({
    method: 'PUT',
    path: '/mushrooms/{id}',
    handler: mushroomPutController.run.bind(mushroomPutController),
  });

  const mushroomsDeleteController: MushroomsDeleteController = container.get(
    'applications.fungus.controllers.MushroomsDeleteController',
  );
  app.route({
    method: 'DELETE',
    path: '/mushrooms',
    handler: mushroomsDeleteController.run.bind(mushroomsDeleteController),
  });

  const mushroomsGetController: MushroomsGetController = container.get(
    'applications.fungus.controllers.MushroomsGetController',
  );
  app.route({
    method: 'GET',
    path: '/mushrooms',
    handler: mushroomsGetController.run.bind(mushroomsGetController),
  });
};
