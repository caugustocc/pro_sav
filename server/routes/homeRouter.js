import { Router } from 'express';
import homeController from '../controllers/homeController';

// Creo una instancia del router de Express
const router = new Router();

// ruta raiz
router.get(['/', '/home'], homeController.index);
// ruta about
router.get('/about', homeController.about);
// Exportando Router
export default router;
