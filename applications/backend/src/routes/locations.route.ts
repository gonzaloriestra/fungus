import { Server } from '@hapi/hapi';

import container from '../config/dependency-injection';

import LocationPutController from '../controllers/Locations/LocationPutController';
import LocationsDeleteController from '../controllers/Locations/LocationsDeleteController';
import LocationByIdGetController from '../controllers/Locations/LocationByIdGetController';

export const register = (app: Server): void => {
  const locationPutController: LocationPutController = container.get(
    'applications.fungus.controllers.LocationPutController',
  );
  const locationByIdGetController: LocationByIdGetController = container.get(
    'applications.fungus.controllers.LocationByIdGetController',
  );
  const locationsDeleteController: LocationsDeleteController = container.get(
    'applications.fungus.controllers.LocationsDeleteController',
  );

  app.route({
    method: 'PUT',
    path: '/locations/{id}',
    options: { auth: 'jwt' },
    handler: locationPutController.run.bind(locationPutController),
  });

  app.route({
    method: 'GET',
    path: '/locations/{id}',
    handler: locationByIdGetController.run.bind(locationByIdGetController),
  });

  app.route({
    method: 'DELETE',
    path: '/locations',
    handler: locationsDeleteController.run.bind(locationsDeleteController),
  });
};
