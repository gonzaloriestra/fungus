// import errorHandler from 'errorhandler';

import initialize from './src/app';
// import container from './config/dependency-injection';

/**
 * Error Handler. Provides full stack - remove for production
 */

/**
 * Start server
 */
async function start(): Promise<void> {
  try {
    const server = await initialize();

    await server.start();

    console.log(`Server running @ ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default start();
