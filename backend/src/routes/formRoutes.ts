import { Router } from 'express';
import { FormController } from '../controllers/formController';

const router = Router();
const formController = new FormController();

router.post('/generate', formController.generateForm);

router.post('/analyze', formController.analyzeFormData);

export default router; 