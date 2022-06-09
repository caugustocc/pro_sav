// Importamos el Router de Express
import { Router } from 'express';

// Importando el controlador de proyecto
import projectController from '../controllers/projectController';

// Crear la instancia del Router
const router = new Router();

/* -------GET--------*/
// Listar proyectos
// GET: / | GET: /projects/index
router.get(['/', 'index'], projectController.index);

// Se envia el formulario para registrar una idea de proyecto
// GET
router.get('/add', projectController.add);

// Exporntando el enrutador Projets
export default router;
