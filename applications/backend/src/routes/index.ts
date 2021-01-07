import { Server } from '@hapi/hapi';
import glob from 'glob';

import { Route } from './Route';

function register(routePath: string, app: Server): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route: Route = require(routePath);

  route.register(app);
}

export function registerRoutes(app: Server): void {
  const routes = glob.sync(__dirname + '/**/*.route.*');

  routes.map((route) => register(route, app));
}
