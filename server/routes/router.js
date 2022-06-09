// Importando el enrutador de Home
import homeRouter from './homeRouter';
import projectRouter from './projectRouter';

// Funcion que agrega todos los enrutadores
// a la aplicacion de express

const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/projects', projectRouter);
};

/* GET home page. */

export default {
  addRoutes,
};
