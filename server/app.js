/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

// rutas

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import templateEngineConf from './config/templateEngine';

import winston from './config/winston';
import usersRouter from './routes/users';
import indexRouter from './routes/index';
import webpackConfig from '../webpack.dev.config';

const app = express();

// Recuperar el modo de ejecucion
const nodeEnv = process.env.NONE_ENV || 'development';
console.log(`< 🛩 > nodeEnv: ${nodeEnv}`);
// Decidiendo si embebemos el webpack mideleware
if (nodeEnv === 'development') {
  // Embebiendo webpck a mi apliacion
  console.log('Ejecutando en mdo desarrollo 🚧');
  // Establecioendo el modo de webpack en desarrollo
  // en el configurador
  webpackConfig.mode = 'development';
  // Confirgurando la ruta del HMR
  // reload=true : Habilita la recarga automatica cuando un archivo JS cambia
  // timeout=1000: Tiempo de refresco de la pagina
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregando el plugin a la configuracion de desarrollo
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // Creamos un empaquetador a partir de un objeto de configuracion
  const bundler = webpack(webpackConfig);
  // Habilitamos el Middleware de webpack en express
  app.use(
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Habilitamos e middleware del webpack HRM
  app.use(WebpackHotMiddleware(bundler));
} else {
  console.log('ejecutando en mdo produccion ⚠');
}

templateEngineConf(app);

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Registramos el error en winston
  winston.error(`${err.status || 500} : ${err.message} : 
   ${req.method} ${req.originalUrl}: IP ${req.ip}`);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
