import { Router } from 'express';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';
import PurchaseController from './controllers/PurchaseController';
const router: Router = Router();
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.get('users/:id/purchases/', PurchaseController.showByUser);
router.post('/session', SessionController.store);

router.get('/purchases/:id', PurchaseController.show);
router.post('/purchases', PurchaseController.store);
export default router;
