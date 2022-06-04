import { Router } from 'express';
import homeController from '../controllers/homeController';

// Creo una instancia del router de Express
const router = new Router();

// Get "/"
router.get('/', homeController.index);

// Exportando Router
export default router;
