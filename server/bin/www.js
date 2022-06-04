/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
// importando instancias
import app from '@s/app';

import Debug from 'debug';
import http from 'http';
import winston from '../config/winston';
import configKeys from '../config/configKeys';

// eslint-disable-next-line no-unused-vars
const debug = Debug('pro-sav:server');

const port = normalizePort(configKeys.port || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

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
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// evento ERROR
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      winston.error(`${bind}requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      winston.error(`${bind} is already in use`);
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
  const addr = server.address();
  // eslint-disable-next-line no-unused-vars
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port  ${addr.port}`;
  debug(`Listening on ${bind}`);
  winston.info(`Escuchando en puerto ${app.get('port')}`);
}
