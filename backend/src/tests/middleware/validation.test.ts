import { Request, Response, NextFunction } from 'express';
import { validateFormGeneration, validateFormAnalysis } from '../../middleware/validation';
import { AppError } from '../../middleware/errorHandler';

describe('Validation Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {};
    mockNext = jest.fn();
  });

  describe('validateFormGeneration', () => {
    it('should pass validation with valid form generation data', () => {
      mockRequest.body = {
        description: 'Create a contact form',
        options: {
          validation: true,
          styling: true,
        },
      };

      validateFormGeneration(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith();
    });

    it('should fail validation with missing description', () => {
      mockRequest.body = {
        options: {
          validation: true,
          styling: true,
        },
      };

      validateFormGeneration(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });

    it('should fail validation with invalid options', () => {
      mockRequest.body = {
        description: 'Create a contact form',
        options: 'invalid',
      };

      validateFormGeneration(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });
  });

  describe('validateFormAnalysis', () => {
    it('should pass validation with valid form analysis data', () => {
      mockRequest.body = {
        formData: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        question: 'What insights can you provide about this form submission?',
      };

      validateFormAnalysis(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith();
    });

    it('should fail validation with missing formData', () => {
      mockRequest.body = {
        question: 'What insights can you provide about this form submission?',
      };

      validateFormAnalysis(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });

    it('should fail validation with missing question', () => {
      mockRequest.body = {
        formData: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      };

      validateFormAnalysis(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });
  });
}); 