/**
 * Module dependencies.
 */

import app from './app';
import config from 'config';
import debug from 'debug';
import http from 'http';
import mongoose from 'mongoose';

/**
 * Get MONGO_URL from environment or config and connect mongodb throw mongoose.
 */

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL || config.get('MONGO_URL'));

mongoose.connection.on('error', function () {
  console.error('Could not connect to MongoDB. Did you forget to run `mongod`?');
});

mongoose.connection.on('connected', function () {
  console.info(
    `APP MONGODB@${mongoose.version}:`,
    process.env.MONGO_URL || config.get('MONGO_URL')
  );
});

mongoose.connection.on('disconnected', function () {
  console.info(`Mongoose disconnected to: ${config.get('MONGO_URL')}`);
});

/**
 * Get PORT from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || config.get('PORT'));
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('MERNjs:app')('Listening on ' + bind + ' in ' + app.get('env') + ' env');
}
