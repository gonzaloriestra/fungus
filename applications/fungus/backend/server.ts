// import errorHandler from 'errorhandler';
import app from './app';
// import container from './config/dependency-injection';

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Hapi server.
 */
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running @ ${server.info.uri}`);
}

start();

export default server;