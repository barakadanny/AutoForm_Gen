import { Request, Response, NextFunction } from 'express';
import { AIService } from '../services/ai/AIService';
import { AppError } from '../middleware/errorHandler';

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
      const { description, options } = req.body;

      if (!description) {
        throw new AppError(400, 'Form description is required');
      }

      const response = await this.aiService.generateForm({
        description,
        options,
      });

      res.status(200).json({
        status: 'success',
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };

  public analyzeFormData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { formData, question } = req.body;

      if (!formData || !question) {
        throw new AppError(
          400,
          'Form data and question are required for analysis'
        );
      }

      const response = await this.aiService.analyzeFormData({
        formData,
        question,
      });

      res.status(200).json({
        status: 'success',
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };
} 