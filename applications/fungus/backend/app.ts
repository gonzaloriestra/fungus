import { Server, Request, ResponseToolkit } from 'hapi';

import { registerRoutes } from './routes';

const app: Server = new Hapi.Server({ host: 'localhost', port: process.env.PORT || 3000 });

registerRoutes(app);

server.route({
  method: 'GET',
  path: '/',
  handler: (request: Request, h: ResponseToolkit) => 'This is the GET route.',
});




export default app;