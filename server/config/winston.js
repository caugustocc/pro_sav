// Importando Winston con la subfuncion format
import winston, { format } from 'winston';
// Se obtiene la ruta de la raiz del proyecto
import appRoot from 'app-root-path';

const { combine, timestamp, label, printf, colorize } = format;

// Definiendo un esquema de colores
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Agregando el esquema de coores a winston
winston.addColors(colors);

// Creando formato para la consola
const myConsoleFormat = combine(
  // Agregando colores al formato
  colorize({ all: true }),
  // Agregando una etiqueta
  label({ label: '💎' }),
  // Agregando la fecha
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  // Funcion de impresion
  printf(
    (info) =>
      `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
  )
);

// creando formato para archivo
const myFileFormat = combine(
  // Sin color
  format.uncolorize(),
  // Agregando la fecha
  timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
  // Salida en formato Json
  format.json()
);

// Crear el objeto de configuracion (options object)
const options = {
  infoFile: {
    level: 'info',
    filename: `${appRoot}/server/logs/info.log`,
    handleExceptions: false,
    maxsize: 5242880, // 5 MB por archivo
    maxFile: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warn.log`,
    handleExceptions: false,
    maxsize: 5242880, // 5 MB por archivo
    maxFile: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${appRoot}/server/logs/error.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5 MB por archivo
    maxFile: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: myConsoleFormat,
  },
};

// Creamos una instancia de Logger
const logger = winston.createLogger({
  transports: [
    // Se exporta cada configuracion
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    // Este es el unico que va para consola
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // No finaliza en excepciones no manejadas
});

// Interceptar el flujo de morgan

// Establecion un flujo de entrada qu sirva
// Para interceptar el log de morgan

logger.stream = {
  write(message) {
    logger.info(message);
  },
};
export default logger;
