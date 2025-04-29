import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler';

interface FormGenerationOptions {
  validation?: boolean;
  styling?: boolean;
}

interface FormGenerationRequest {
  description: string;
  options?: FormGenerationOptions;
}

interface FormAnalysisRequest {
  formData: Record<string, any>;
  question: string;
}

export const validateFormGeneration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { description, options } = req.body as FormGenerationRequest;

  if (!description) {
    return next(new AppError('Form description is required', 400));
  }

  if (options && typeof options !== 'object') {
    return next(new AppError('Options must be an object', 400));
  }

  if (options) {
    const { validation, styling } = options;
    if (validation !== undefined && typeof validation !== 'boolean') {
      return next(new AppError('Validation option must be a boolean', 400));
    }
    if (styling !== undefined && typeof styling !== 'boolean') {
      return next(new AppError('Styling option must be a boolean', 400));
    }
  }

  next();
};

export const validateFormAnalysis = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { formData, question } = req.body as FormAnalysisRequest;

  if (!formData || typeof formData !== 'object') {
    return next(new AppError('Form data is required and must be an object', 400));
  }

  if (!question || typeof question !== 'string') {
    return next(new AppError('Question is required and must be a string', 400));
  }

  next();
}; 