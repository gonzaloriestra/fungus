// import errorHandler from 'errorhandler';
import app from './app';
// import container from './config/dependency-injection';

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start server
 */
async function start(): Promise<void> {
  try {
    await app.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running @ ${app.info.uri}`);
}

export default start();
