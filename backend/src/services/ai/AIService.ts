import { config } from '../../config';
import OpenAI from 'openai';
import {
  FormGenerationRequest,
  FormGenerationResponse,
  AIAnalysisRequest,
  AIAnalysisResponse,
} from './types';
import { AppError } from '../../middleware/errorHandler';

export class AIService {
  private static instance: AIService;
  private openai: OpenAI;

  private constructor() {
    if (!config.OPENAI_API_KEY) {
      throw new AppError('OpenAI API key is not configured', 500);
    }
    this.openai = new OpenAI({
      apiKey: config.OPENAI_API_KEY,
    });
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  public async generateForm(
    request: FormGenerationRequest
  ): Promise<FormGenerationResponse> {
    try {
      const systemPrompt = `You are an expert form builder. Your task is to analyze the user's description and generate a form schema.
      The form should include appropriate fields based on the description.
      For each field, determine:
      1. The field type (text, email, number, select, checkbox, etc.)
      2. Whether it's required
      3. Any validation rules
      4. A clear label
      
      Return the response in JSON format matching this structure:
      {
        "fields": [
          {
            "type": "string",
            "name": "string",
            "label": "string",
            "required": boolean,
            "validation": object,
            "options": string[] (for select/radio fields)
          }
        ]
      }`;

      const userPrompt = `Create a form based on this description: "${request.description}"
      ${request.options?.includeValidation ? 'Include validation rules.' : ''}
      ${request.options?.includeStyling ? 'Include styling suggestions.' : ''}
      ${request.options?.targetFramework ? `Target framework: ${request.options.targetFramework}` : ''}`;

      const completion = await this.openai.chat.completions.create({
        model: config.OPENAI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.7
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new AppError('No response received from AI service', 500);
      }

      let formSchema;
      try {
        formSchema = JSON.parse(response);
      } catch (error) {
        console.error('Failed to parse AI response:', error);
        throw new AppError('Invalid response format from AI service', 500);
      }

      if (!formSchema.fields || !Array.isArray(formSchema.fields)) {
        throw new AppError('Invalid form schema structure', 500);
      }

      return {
        formSchema: {
          fields: formSchema.fields,
          validation: request.options?.includeValidation ? formSchema.validation : undefined,
          styling: request.options?.includeStyling ? formSchema.styling : undefined,
        },
        metadata: {
          processingTime: completion.usage?.total_tokens || 0,
          model: config.OPENAI_MODEL,
        },
      };
    } catch (error) {
      console.error('Error generating form:', error);
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Failed to generate form schema', 500);
    }
  }

  public async analyzeFormData(
    request: AIAnalysisRequest
  ): Promise<AIAnalysisResponse> {
    try {
      const systemPrompt = `You are an expert data analyst. Your task is to analyze form data and provide insights.
      Look for patterns, trends, and answer specific questions about the data.`;

      const userPrompt = `Form Data: ${JSON.stringify(request.formData)}
      Question: ${request.question}`;

      const completion = await this.openai.chat.completions.create({
        model: config.OPENAI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const response = completion.choices[0]?.message?.content;
      if (!response) {
        throw new AppError('Failed to analyze form data', 500);
      }

      // Parse the AI response
      const analysis = JSON.parse(response);

      return {
        answer: analysis.answer,
        insights: analysis.insights,
        confidence: analysis.confidence,
      };
    } catch (error) {
      console.error('Error analyzing form data:', error);
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Failed to analyze form data', 500);
    }
  }
} 