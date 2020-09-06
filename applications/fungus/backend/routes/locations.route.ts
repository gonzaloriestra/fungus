import { Server } from 'hapi';

import container from '../config/dependency-injection';

import LocationPutController from '../controllers/Locations/LocationPutController';
import LocationsGetController from '../controllers/Locations/LocationsGetController';

export const register = (app: Server): void => {
  const locationPutController: LocationPutController = container.get(
    'applications.fungus.controllers.LocationPutController',
  );
  const locationsGetController: LocationsGetController = container.get(
    'applications.fungus.controllers.LocationsGetController',
  );

  app.route({
    method: 'PUT',
    path: '/locations/{id}',
    handler: locationPutController.run.bind(locationPutController),
  });

  app.route({
    method: 'GET',
    path: '/locations',
    handler: locationsGetController.run.bind(locationsGetController),
  });
};
