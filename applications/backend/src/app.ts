import { Server } from '@hapi/hapi';
// @ts-ignore
import Jwt from '@hapi/jwt';

import { registerRoutes } from './routes';

/**
 * Initialize the app
 */
export default async function initialize(): Promise<Server> {
  try {
    const server = new Server({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3001,
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    });

    await server.register(Jwt);

    server.auth.strategy('jwt', 'jwt', {
      keys: {
        key: 'some_shared_secret',
      },
      verify: {
        aud: false,
        iss: false,
        sub: false,
        nbf: false,
        exp: false,
      },
      validate: (artifacts: { decoded: { payload: { userId: string } } }, _: any, __: any) => {
        return {
          isValid: true,
          credentials: { userId: artifacts.decoded.payload.userId },
        };
      },
    });
    // Set the strategy
    // app.auth.default('jwt');

    registerRoutes(server);

    return server;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
