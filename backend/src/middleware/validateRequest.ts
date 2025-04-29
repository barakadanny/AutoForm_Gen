import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from './errorHandler';

const formGenerationSchema = z.object({
  description: z.string().min(1, 'Form description is required'),
  options: z.object({
    includeValidation: z.boolean().optional(),
    includeStyling: z.boolean().optional(),
    targetFramework: z.string().optional(),
  }).optional(),
});

const formAnalysisSchema = z.object({
  formData: z.record(z.any()),
  question: z.string().min(1, 'Question is required'),
});

export const validateFormGeneration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    formGenerationSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new AppError(error.errors[0].message, 400));
    } else {
      next(error);
    }
  }
};

export const validateFormAnalysis = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    formAnalysisSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new AppError(error.errors[0].message, 400));
    } else {
      next(error);
    }
  }
}; 