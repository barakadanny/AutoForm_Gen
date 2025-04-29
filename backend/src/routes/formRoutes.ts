import { Router } from 'express';
import { FormController } from '../controllers/formController';
import { validateFormGeneration, validateFormAnalysis } from '../middleware/validateRequest';

const router = Router();
const formController = new FormController();

router.post(
  '/generate',
  validateFormGeneration,
  formController.generateForm
);

router.post(
  '/analyze',
  validateFormAnalysis,
  formController.analyzeFormData
);

export default router; 