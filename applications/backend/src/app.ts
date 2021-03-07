import { Server } from '@hapi/hapi';
// @ts-ignore
import Jwt from '@hapi/jwt';

import { registerRoutes } from './routes';

const JWT_SIGNING_SECRET = process.env.JWT_SIGNING_SECRET;

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
        key: JWT_SIGNING_SECRET,
      },
      verify: {
        aud: false,
        iss: false,
        sub: false,
        nbf: false,
        exp: false,
      },
      validate: (artifacts: { decoded: { payload: { userId: string } } }, _: any, __: any) => {
        // @ts-ignore
        const userId = artifacts?.decoded?.payload['http://fungus/user_id'];

        return {
          isValid: true,
          credentials: { userId },
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
