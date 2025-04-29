import { Request, Response, NextFunction } from 'express';
import { FormController } from '../../controllers/formController';
import { AIService } from '../../services/ai/AIService';
import { AppError } from '../../middleware/errorHandler';

// Mock the AIService
jest.mock('../../services/ai/AIService');

describe('FormController', () => {
  let formController: FormController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    formController = new FormController();
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  describe('generateForm', () => {
    it('should generate a form successfully', async () => {
      const mockFormData = {
        description: 'Create a contact form',
        options: {
          validation: true,
          styling: true,
        },
      };

      mockRequest.body = mockFormData;

      const mockResult = {
        schema: {
          fields: [
            {
              type: 'text',
              name: 'name',
              label: 'Name',
              required: true,
            },
          ],
        },
        metadata: {
          processingTime: 0.5,
          model: 'gpt-4',
        },
      };

      (AIService.getInstance().generateForm as jest.Mock).mockResolvedValue(mockResult);

      await formController.generateForm(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.json).toHaveBeenCalledWith(mockResult);
    });

    it('should handle validation errors', async () => {
      mockRequest.body = {};

      await formController.generateForm(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });
  });

  describe('analyzeFormData', () => {
    it('should analyze form data successfully', async () => {
      const mockFormData = {
        formData: {
          name: 'John Doe',
          email: 'john@example.com',
        },
        question: 'What insights can you provide about this form submission?',
      };

      mockRequest.body = mockFormData;

      const mockResult = {
        insights: ['The form submission appears to be valid'],
        metadata: {
          processingTime: 0.3,
          model: 'gpt-4',
        },
      };

      (AIService.getInstance().analyzeFormData as jest.Mock).mockResolvedValue(mockResult);

      await formController.analyzeFormData(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.json).toHaveBeenCalledWith(mockResult);
    });

    it('should handle validation errors', async () => {
      mockRequest.body = {};

      await formController.analyzeFormData(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockNext).toHaveBeenCalledWith(expect.any(AppError));
    });
  });
}); 