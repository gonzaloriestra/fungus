import { Server } from 'hapi';

import { registerRoutes } from './routes';

const app = new Server({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

registerRoutes(app);

export default app;
