// import errorHandler from 'errorhandler';
import app from './src/app';
// import container from './config/dependency-injection';

/**
 * Error Handler. Provides full stack - remove for production
 */
import Jwt from '@hapi/jwt';

import { registerRoutes } from './src/routes';

/**
 * Start server
 */
async function start(): Promise<void> {
  try {
    await app.register(Jwt);

    app.auth.strategy('jwt', 'jwt', {
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

    registerRoutes(app);

    // Set the strategy

    // app.auth.default('jwt');

    await app.start();
    console.log(`Server running @ ${app.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default start();
