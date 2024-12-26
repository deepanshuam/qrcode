import { Router } from 'express';
import { generateQR } from './controller.js';

const router = Router();

router.post('/generate-qr', generateQR);

export default router;