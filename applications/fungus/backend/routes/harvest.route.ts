import { Server } from 'hapi';

// import container from '../config/dependency-injection';
import HarvestRegistration from '../../../../src/Fungus/Harvests/Application/Register/HarvestRegistration';

import HarvestPutController from '../controllers/Harvests/HarvestPutController';

export const register = (app: Server): void => {
  // const controller: StatusController = container.get('Apps.mooc.controllers.StatusGetController');
  const controller = new HarvestPutController(new HarvestRegistration());

  app.route({
    method: 'PUT',
    path: '/harvests/{id}',
    handler: controller.run.bind(controller),
  });
};
