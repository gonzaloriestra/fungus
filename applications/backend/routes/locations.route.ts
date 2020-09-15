import { Server } from 'hapi';

import container from '../config/dependency-injection';

import LocationPutController from '../controllers/Locations/LocationPutController';
import LocationsGetController from '../controllers/Locations/LocationsGetController';
import LocationsDeleteController from '../controllers/Locations/LocationsDeleteController';
import LocationsByIdGetController from '../controllers/Locations/LocationsByIdGetController';

export const register = (app: Server): void => {
  const locationPutController: LocationPutController = container.get(
    'applications.fungus.controllers.LocationPutController',
  );
  const locationsGetController: LocationsGetController = container.get(
    'applications.fungus.controllers.LocationsGetController',
  );
  const locationsByIdGetController: LocationsByIdGetController = container.get(
    'applications.fungus.controllers.LocationsByIdGetController',
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
    method: 'GET',
    path: '/locations/{id}',
    handler: locationsByIdGetController.run.bind(locationsByIdGetController),
  });

  app.route({
    method: 'DELETE',
    path: '/locations',
    handler: locationsDeleteController.run.bind(locationsDeleteController),
  });
};
