import { Server } from '@hapi/hapi';

const app = new Server({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

export default app;
