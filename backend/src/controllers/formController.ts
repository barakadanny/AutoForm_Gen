import { Request, Response, NextFunction } from 'express';
import { AIService } from '../services/ai/AIService';
import { AppError } from '../middleware/errorHandler';
import { validateFormGeneration, validateFormAnalysis } from '../middleware/validateRequest';

export class FormController {
  private aiService: AIService;

  constructor() {
    this.aiService = AIService.getInstance();
  }

  public generateForm = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate request
      validateFormGeneration(req, res, (err) => {
        if (err) return next(err);
      });

      const { description, options } = req.body;

      if (!description) {
        return next(new AppError('Form description is required', 400));
      }

      // Generate form using AI service
      const result = await this.aiService.generateForm({
        description,
        options,
      });

      res.json(result);
    } catch (error) {
      if (error instanceof AppError) {
        next(error);
      } else {
        console.error('Unexpected error in generateForm:', error);
        next(new AppError('Failed to generate form schema', 500));
      }
    }
  };

  public analyzeFormData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Validate request
      validateFormAnalysis(req, res, () => {});

      const { formData, question } = req.body;

      // Analyze form data using AI service
      const result = await this.aiService.analyzeFormData({
        formData,
        question,
      });

      res.json(result);
    } catch (error) {
      next(error);
    }
  };
} 