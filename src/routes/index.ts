import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/nome', UserController.nome);
router.get('/usuario/:id/excluir', UserController.excluir)
router.post('/novousuario', UserController.addUser)

export default router;