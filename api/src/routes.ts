import { Router } from 'express';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';
const router: Router = Router();
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.post('/session', SessionController.store);

export default router;
