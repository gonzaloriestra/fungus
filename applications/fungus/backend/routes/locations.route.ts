import { Server } from 'hapi';

import container from '../config/dependency-injection';

import LocationPutController from '../controllers/Locations/LocationPutController';
import LocationsGetController from '../controllers/Locations/LocationsGetController';
import LocationsDeleteController from '../controllers/Locations/LocationsDeleteController';

export const register = (app: Server): void => {
  const locationPutController: LocationPutController = container.get(
    'applications.fungus.controllers.LocationPutController',
  );
  const locationsGetController: LocationsGetController = container.get(
    'applications.fungus.controllers.LocationsGetController',
  );
  const locationsDeleteController: LocationsDeleteController = container.get(
    'applications.fungus.controllers.LocationsDeleteController',
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

  app.route({
    method: 'DELETE',
    path: '/locations',
    handler: locationsDeleteController.run.bind(locationsDeleteController),
  });
};
