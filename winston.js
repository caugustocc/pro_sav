// Importando Winston
const winston = require('winston');

// Creando el objeto de configuracion de Winston
const logConfiguration ={
    // Tansportes de winston
    'transports':[
        // en nivel de alerta solo es que se muestre en consola
        new winston.transport.Console({
            level: 'warn'
        }),
        // Nivel error ya mguarda el mensaje dentro de logs/example.log
        new winston.transports.File({
            level: 'error',
            // Direccion de ruta
            filename: 'logs/example.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label: ` 🏷 Etiqueta`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};
// Creando un registrador y pasarlo al objeto
const logger = winston.createLogger(logConfiguration);

// Registrar el mensaje
// logger.log({
//     message: 'Hello Winston!',
//     level: 'info'
// });

// Mensaje segun su nivel
logger.error("Hello, Winston logger, the first error!");
logger.warn("Hello, Winston logger, the first warning!");
logger.warn("Hello, Winston logger, the second warning!");
logger.error("Hello, Winston logger, the second error!");
logger.info("Hello, Winston logger, some info!");
logger.debug("Hello, Winston logger, a debug!");