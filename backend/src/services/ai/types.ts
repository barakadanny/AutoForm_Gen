export interface FormGenerationRequest {
  description: string;
  options?: {
    includeValidation?: boolean;
    includeStyling?: boolean;
    targetFramework?: string;
  };
}

export interface FormGenerationResponse {
  formSchema: {
    fields: FormField[];
    validation?: Record<string, any>;
    styling?: Record<string, any>;
  };
  metadata: {
    processingTime: number;
    model: string;
  };
}

export interface FormField {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  validation?: Record<string, any>;
  options?: string[];
}

export interface AIAnalysisRequest {
  formData: Record<string, any>;
  question: string;
}

export interface AIAnalysisResponse {
  answer: string;
  insights: string[];
  confidence: number;
} 