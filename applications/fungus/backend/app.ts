import { Server } from 'hapi';

import { registerRoutes } from './routes';

const app = new Server({ host: 'localhost', port: process.env.PORT || 3000 });

registerRoutes(app);

export default app;
